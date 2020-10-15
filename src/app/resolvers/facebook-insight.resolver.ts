import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import { catchError, switchMap } from 'rxjs/operators';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ErrorService, FacebookInsightService, UserService } from '../core/service';
import { IFbInsight, IUser } from '../core/model';

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
    return format(new Date(date), 'MMM dd, yyyy');
  }

  private getInsights (payload: { id: string; date_range: string[] }): Observable<IFbInsight> {
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

      catchError((error) => {
        this.errorService.handleServerError(error);

        return of(error);
      })
    );
  }

  public resolve (route: ActivatedRouteSnapshot): Observable<IFbInsight | null> {
    const date_range = [this.formatDate(subDays(new Date(), Number.parseInt('6', 10))), this.formatDate(new Date())];
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
