import format from 'date-fns/format';
import { ConnectionService } from '@core/service/connection/connection.service';
import { E_CONNECTION_TYPE } from '@core/enum';
import { I_CONNECTION, I_DROPDOWN, I_INSIGHT, I_INSIGHT_PAYLOAD, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { InsightService } from '@core/service/insight/insight.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from '@core/service/user/user.service';

@Injectable()
export class FacebookFacade {
  constructor(private connectionService: ConnectionService, private insightService: InsightService, private userService: UserService) {}

  getInsights(payload: I_INSIGHT_PAYLOAD): Observable<I_INSIGHT> {
    const { id, dateRange } = payload;
    const since = format(new Date(dateRange[0]), 'yyyy-MM-dd');
    const until = format(new Date(dateRange[1]), 'yyyy-MM-dd');

    return this.userService.getUserFromState().pipe(
      switchMap((user: I_USER) => {
        const userID = user.id;
        return this.insightService.getInsights({ userID, id, since, until });
      }),
    );
  }

  getInsightFromState(id: string): Observable<I_INSIGHT> {
    return this.insightService.getInsightFromState(id);
  }

  getFacebookPages(): Observable<I_DROPDOWN[]> {
    return this.connectionService.connectionsByType(E_CONNECTION_TYPE.FACEBOOK_PAGE).pipe(
      map((connections: I_CONNECTION[]) => {
        const dropdown: I_DROPDOWN[] = [];
        connections.forEach((connection: I_CONNECTION) => {
          dropdown.push({ label: connection.connectionName, value: connection.connectionID });
        });

        return dropdown;
      }),
    );
  }
}
