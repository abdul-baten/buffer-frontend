import format from 'date-fns/format';
import { EConnectionType } from 'src/app/core/enum';
import {
  first,
  map,
  shareReplay,
  switchMap
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import type { ConnectionService, GlobalService, FacebookInsightService, UserService } from 'src/app/core/service';
import type { IConnection, IDropdown, IFbInsight, IUser } from 'src/app/core/model';
import type { Observable } from 'rxjs';

@Injectable()
export class FacebookFacade {
  constructor (
    private readonly connectionService: ConnectionService,
    private readonly facebookInsightService: FacebookInsightService,
    private readonly globalService: GlobalService,
    private readonly userService: UserService
  ) {}

  formatDate (date: string | Date): string {
    return format(new Date(date), 'MMM dd, yyyy');
  }

  public getInsights (payload: { id: string; date_range: string[] }): Observable<IFbInsight> {
    const { id, date_range } = payload;
    const since = format(new Date(date_range[0]), 'yyyy-MM-dd');
    const until = format(new Date(date_range[1]), 'yyyy-MM-dd');

    return this.userService.getUserFromState().pipe(
      switchMap(({ id: user_id }: IUser) => this.facebookInsightService.getInsights({
        id,
        since,
        until,
        user_id
      })),
      shareReplay(1),
      first()
    );
  }

  public getInsightFromState (id: string): Observable<IFbInsight> {
    return (this.facebookInsightService.fbInsightFromState(id) as unknown) as Observable<IFbInsight>;
  }

  getFacebookPages (): Observable<IDropdown[]> {
    return this.connectionService.connectionsByType(EConnectionType.FACEBOOK).pipe(map((connections: IConnection[]) => {
      const dropdown: IDropdown[] = [];

      connections.forEach((connection: IConnection) => {
        dropdown.push({
          label: connection.connection_name,
          value: connection.connection_id
        });
      });

      return dropdown;
    }));
  }

  viewPost (url: string): void {
    this.globalService.getWindow().open(url, '_blank');
  }

  profileInsight (connection_type: string, connection_id: string): void {
    this.globalService.getLocation().assign(`analyze/${connection_type}/${connection_id}`);
  }
}
