import dayJs from 'dayjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { ErrorService, InstagramInsightService, UserService } from '../core/service';
import { IInstaInsight, IUser } from '../core/model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeInstagramResolver implements Resolve<IInstaInsight | null> {
  constructor (
    private readonly errorService: ErrorService,
    private readonly insightService: InstagramInsightService,
    private readonly userService: UserService
  ) {}

  private formatDate (date: string | Date): string {
    return dayJs(date).format('MMM DD, YYYY');
  }

  private getInsights (payload: { id: string; date_range: string[] }): Observable<IInstaInsight> {
    const { id, date_range } = payload;
    const since = dayJs(date_range[0]).format('YYYY-MM-DD');
    const until = dayJs(date_range[1]).format('YYYY-MM-DD');

    return this.userService.getUserFromState().pipe(
      switchMap((user: IUser) => {
        const { id: user_id } = user;

        return this.insightService.getInsights({
          id,
          since,
          until,
          user_id
        });
      }),
      catchError((error) => {
        this.errorService.handleServerError(error);

        return throwError(error);
      })
    );
  }

  resolve (route: ActivatedRouteSnapshot): Observable<IInstaInsight | null> {
    const date = dayJs().subtract(Number.parseInt('6', 10), 'day').
      toDate();
    const date_range = [this.formatDate(date), this.formatDate(new Date())];
    const { id } = route.params;

    return this.getInsights({
      date_range,
      id
    });
  }
}
