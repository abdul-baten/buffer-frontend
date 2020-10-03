import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { ErrorService, InsightService, UserService } from '../core/service';
import { I_INS_FB, I_USER } from '../core/model';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyzeFacebookResolver implements Resolve<I_INS_FB | null> {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly errorService: ErrorService,
    private readonly insightService: InsightService,
    private readonly userService: UserService,
  ) {}

  private formatDate(date: string | Date): string {
    return format(new Date(date), 'MMM dd, yyyy');
  }

  private getInsights(payload: { id: string; dateRange: string[] }): Observable<I_INS_FB> {
    const { id, dateRange } = payload;
    const since = format(new Date(dateRange[0]), 'yyyy-MM-dd');
    const until = format(new Date(dateRange[1]), 'yyyy-MM-dd');

    return this.userService.getUserFromState().pipe(
      switchMap((user: I_USER) => {
        const { id: userID } = user;
        return this.insightService.getFBInsights({ userID, id, since, until });
      }),
      catchError((error) => {
        this.errorService.handleServerError(error);
        return of(error);
      }),
    );
  }

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<I_INS_FB | null> {
    const dateRange = [this.formatDate(subDays(new Date(), 6)), this.formatDate(new Date())];
    const { id } = route.params;
    return isPlatformBrowser(this.platformId) ? this.getInsights({ id, dateRange }) : of(null);
  }
}
