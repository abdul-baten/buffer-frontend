import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import { catchError, switchMap } from 'rxjs/operators';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, throwError } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { IInstaInsight, IUser } from '../core/model';
import { ErrorService, InstagramInsightService, UserService } from '../core/service';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeInstagramResolver implements Resolve<IInstaInsight | null> {
  constructor (
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly errorService: ErrorService,
    private readonly insightService: InstagramInsightService,
    private readonly userService: UserService
  ) {}

  private formatDate (date: string | Date): string {
    return format(new Date(date), 'MMM dd, yyyy');
  }

  private getInsights (payload: { id: string; date_range: string[] }): Observable<IInstaInsight> {
    const { id, date_range } = payload;
    const since = format(new Date(date_range[0]), 'yyyy-MM-dd');
    const until = format(new Date(date_range[1]), 'yyyy-MM-dd');

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
    const date_range = [this.formatDate(subDays(new Date(), Number.parseInt('6', 10))), this.formatDate(new Date())];
    const { id } = route.params;

    return isPlatformBrowser(this.platformId) ?
      this.getInsights({
        date_range,
        id
      }) :
      of(null);
  }
}
