import dayJs from 'dayjs';
import {
  ConnectionService,
  FacebookInsightService,
  GlobalService,
  UserService
} from 'src/app/core/service';
import { EConnectionType } from 'src/app/core/enum';
import {
  IConnection,
  IDropdown,
  IFbInsight,
  IUser
} from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FacebookFacade {
  constructor (
    private readonly connectionService: ConnectionService,
    private readonly facebookInsightService: FacebookInsightService,
    private readonly globalService: GlobalService,
    private readonly userService: UserService
  ) {}

  formatDate (date: string | Date): string {
    return dayJs(new Date(date)).format('MMM DD, YYYY');
  }

  public getInsights (payload: { id: string; date_range: string[] }): Observable<IFbInsight> {
    const { id, date_range } = payload;
    const since = dayJs(new Date(date_range[0])).format('YYYY-MM-DD');
    const until = dayJs(new Date(date_range[1])).format('YYYY-MM-DD');

    return this.userService.getUserFromState().pipe(switchMap(({ id: user_id }: IUser) => this.facebookInsightService.getInsights({
      id,
      since,
      until,
      user_id
    })));
  }

  public getInsightFromState (id: string): Observable<IFbInsight> {
    return this.facebookInsightService.getInsightFromState(id).pipe(tap(console.warn));
  }

  getFacebookPages (): Observable<IDropdown[]> {
    return this.connectionService.connectionsByType(EConnectionType.FACEBOOK_PAGE).pipe(map((connections: IConnection[]) => {
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
