import dayJs from 'dayjs';
import { first, shareReplay, switchMap } from 'rxjs/operators';
import { GlobalService, InstagramInsightService, UserService } from 'src/app/core/service';
import { IInstaInsight, IUser } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InstagramFacade {
  constructor (
    private readonly globalService: GlobalService,
    private readonly instagramInsightService: InstagramInsightService,
    private readonly userService: UserService
  ) {}

  public formatDate (date: string | Date): string {
    return dayJs(date).format('MMM DD, YYYY');
  }

  public getInsights (payload: { id: string; date_range: Date[] }): Observable<IInstaInsight> {
    const { id, date_range } = payload;
    const since = dayJs(date_range[0]).format('YYYY-MM-DD');
    const until = dayJs(date_range[1]).format('YYYY-MM-DD');

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
