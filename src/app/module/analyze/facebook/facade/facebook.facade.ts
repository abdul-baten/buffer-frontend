import dayJs from 'dayjs';
import {
  ConnectionService,
  FacebookInsightService,
  GlobalService,
  UserService
} from 'src/app/core/service';
import { EConnectionType, EFbInsightType } from 'src/app/core/enum';
import { IConnection, IDropdown, IUser } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FacebookFacade {
  constructor (
    private readonly connectionService: ConnectionService,
    private readonly facebookInsightService: FacebookInsightService,
    private readonly globalService: GlobalService,
    private readonly userService: UserService
  ) {}

  public formatDate (date: string | Date): string {
    return dayJs(date).format('MMM DD, YYYY');
  }

  public getInsights<T> (payload: { id: string; date_range: Date[], insight_type: EFbInsightType }): Observable<T> {
    const { id, date_range, insight_type } = payload;
    const since = dayJs(date_range[0]).format('YYYY-MM-DD');
    const until = dayJs(date_range[1]).format('YYYY-MM-DD');

    return this.userService.getUserFromState().pipe(switchMap(({ id: user_id }: IUser) => this.facebookInsightService.getInsightsFromServer<T>({
      id,
      since,
      until,
      user_id
    }, insight_type)));
  }

  public getInsightFromState<T> (id: string, insight_type: EFbInsightType): Observable<T> {
    return this.facebookInsightService.getInsightFromState(id, insight_type);
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
    this.globalService.getLocation().assign(`${connection_type}/overview/${connection_id}`);
  }
}
