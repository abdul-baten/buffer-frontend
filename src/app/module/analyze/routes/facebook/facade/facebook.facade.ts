import format from 'date-fns/format';
import { ConnectionService, GlobalService, InsightService, UserService } from 'src/app/core/service';
import { E_CONNECTION_TYPE } from 'src/app/core/enum';
import { first, map, shareReplay, switchMap } from 'rxjs/operators';
import { I_CONNECTION, I_DROPDOWN, I_INS_FB, I_USER } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FacebookFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly globalService: GlobalService,
    private readonly insightService: InsightService,
    private readonly userService: UserService,
  ) {}

  formatDate(date: string | Date): string {
    return format(new Date(date), 'MMM dd, yyyy');
  }

  getInsights(payload: { id: string; dateRange: string[] }): Observable<I_INS_FB> {
    const { id, dateRange } = payload;
    const since = format(new Date(dateRange[0]), 'yyyy-MM-dd');
    const until = format(new Date(dateRange[1]), 'yyyy-MM-dd');

    return this.userService.getUserFromState().pipe(
      switchMap((user: I_USER) => {
        const userID = user.id;
        return this.insightService.getFBInsights({ userID, id, since, until });
      }),
      shareReplay(1),
      first(),
    );
  }

  getInsightFromState(id: string): Observable<I_INS_FB> {
    return (this.insightService.fbInsightFromState(id) as unknown) as Observable<I_INS_FB>;
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

  viewPost(url: string): void {
    this.globalService.getWindow().open(url, '_blank');
  }

  profileInsight(connectionType: string, connectionID: string): void {
    this.globalService.getLocation().assign(`analyze/${connectionType}/${connectionID}`);
  }
}
