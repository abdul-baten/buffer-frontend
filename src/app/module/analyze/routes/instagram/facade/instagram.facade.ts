import format from 'date-fns/format';
import { first, shareReplay, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import type { GlobalService, InstagramInsightService, UserService } from 'src/app/core/service';
import type { IInstaInsight, IUser } from 'src/app/core/model';
import type { Observable } from 'rxjs';

@Injectable()
export class InstagramFacade {
  constructor (
    private readonly globalService: GlobalService,
    private readonly instagramInsightService: InstagramInsightService,
    private readonly userService: UserService
  ) {}

  public formatDate (date: string | Date): string {
    return format(new Date(date), 'MMM dd, yyyy');
  }

  public getInsights (payload: { id: string; date_range: string[] }): Observable<IInstaInsight> {
    const { id, date_range } = payload;
    const since = format(new Date(date_range[0]), 'yyyy-MM-dd');
    const until = format(new Date(date_range[1]), 'yyyy-MM-dd');

    return this.userService.getUserFromState().pipe(
      switchMap(({ id: user_id }: IUser) => this.instagramInsightService.getInsights({
        id,
        since,
        until,
        user_id
      })),
      first(),
      shareReplay(1)
    );
  }

  public getInsightFromState (id: string): Observable<IInstaInsight> {
    return this.instagramInsightService.fbInsightFromState(id);
  }

  public viewPost (url: string): void {
    this.globalService.getWindow().open(url, '_blank');
  }
}
