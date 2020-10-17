import dayJs from 'dayjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { ErrorService, FacebookInsightService, UserService } from '../core/service';
import { IFbInsight, IUser } from '../core/model';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeFacebookResolver implements Resolve<IFbInsight | null> {
  constructor (
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly errorService: ErrorService,
    private readonly facebookInsightService: FacebookInsightService,
    private readonly userService: UserService
  ) {}

  private formatDate (date: string | Date): string {
    return dayJs(date).format('MMM DD, YYYY');
  }

  private getInsights (payload: { id: string; date_range: string[] }): Observable<IFbInsight> {
    const { id, date_range } = payload;
    const since = dayJs(date_range[0]).format('YYYY-MM-DD');
    const until = dayJs(date_range[1]).format('YYYY-MM-DD');

    return this.userService.getUserFromState().pipe(
      switchMap(({ id: user_id }: IUser) => this.facebookInsightService.getInsights({
        id,
        since,
        until,
        user_id
      })),
      catchError((error) => {
        console.warn(error);

        this.errorService.handleServerError(error);

        return of(error);
      })
    );
  }

  public resolve (route: ActivatedRouteSnapshot): Observable<IFbInsight | null> {
    const date = dayJs().subtract(Number.parseInt('6', 10), 'day').
      toDate();
    const date_range = [this.formatDate(date), this.formatDate(new Date())];
    const { id } = route.params;

    if (isPlatformBrowser(this.platformId)) {
      return this.getInsights({
        date_range,
        id
      });
    }

    return of(null);
  }
}
