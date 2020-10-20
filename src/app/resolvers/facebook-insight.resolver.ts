import dayJs from 'dayjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, first, switchMap } from 'rxjs/operators';
import { EFbInsightType } from '../core/enum';
import { ErrorService, FacebookInsightService, UserService } from '../core/service';
import { Injectable } from '@angular/core';
import { IUser } from '../core/model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeFacebookResolver<T> implements Resolve<T | null> {
  constructor (private readonly errorService: ErrorService, private readonly facebookInsightService: FacebookInsightService, private readonly userService: UserService) {}

  private formatDate (date: string | Date): string {
    return dayJs(date).format('MMM DD, YYYY');
  }

  private getInsights<T> (payload: { id: string; date_range: string[], insight_type: EFbInsightType }): Observable<T> {
    const { id, date_range, insight_type } = payload;
    const since = dayJs(date_range[0]).format('YYYY-MM-DD');
    const until = dayJs(date_range[1]).format('YYYY-MM-DD');

    return this.userService.getUserFromState().pipe(
      switchMap(({ id: user_id }: IUser) => this.facebookInsightService.getInsightsFromServer<T>({
        id,
        since,
        until,
        user_id
      }, insight_type)),
      first(),
      catchError((error) => {
        this.errorService.handleServerError(error);

        return of(error);
      })
    );
  }

  public resolve (route: ActivatedRouteSnapshot): Observable<T | null> {
    const { insight_type } = route.data;
    const date = dayJs().subtract(Number.parseInt('6', 10), 'day').
      toDate();
    const date_range = [this.formatDate(date), this.formatDate(new Date())];
    const { id } = route.params;

    return this.getInsights<T>({
      date_range,
      id,
      insight_type
    });
  }
}
