import format from 'date-fns/format';
import { I_INSIGHT, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { InsightService } from '@core/service/insight/insight.service';
import { Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { UserService } from '@core/service/user/user.service';

@Injectable()
export class InstagramFacade {
  constructor(private readonly insightService: InsightService, private readonly userService: UserService) {}

  formatDate(date: string | Date): string {
    return format(new Date(date), 'MMM dd, yyyy');
  }

  getInsights(payload: { id: string; dateRange: string[] }): Observable<I_INSIGHT> {
    const { id, dateRange } = payload;
    const since = format(new Date(dateRange[0]), 'yyyy-MM-dd');
    const until = format(new Date(dateRange[1]), 'yyyy-MM-dd');

    return this.userService.getUserFromState().pipe(
      switchMap((user: I_USER) => {
        const userID = user.id;
        return this.insightService.getIGInsights({ userID, id, since, until });
      }),
      shareReplay(1),
    );
  }

  getInsightFromState(id: string): Observable<I_INSIGHT> {
    return this.insightService.fbInsightFromState(id);
  }
}
