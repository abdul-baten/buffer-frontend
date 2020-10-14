import format from 'date-fns/format';
import { first, map, shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IUser } from '../model';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor (private readonly userService: UserService) {}

  public formatDate (date: string | Date): string {
    return format(new Date(date), 'MMM dd, yyyy');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public getInsights<T> (id: string, date_range: string[], service: any): Observable<T> {
    const since = format(new Date(date_range[0]), 'yyyy-MM-dd');
    const until = format(new Date(date_range[1]), 'yyyy-MM-dd');

    return this.userService.getUserFromState().pipe(
      map(({ id: user_id }: IUser) => service.getInsightFromServer({
        id,
        since,
        until,
        user_id
      }) as T),
      first(),
      shareReplay(1)
    );
  }
}
