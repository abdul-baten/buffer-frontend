import { AppState } from '../reducers';
import { catchError, map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { ErrorService } from '@core/service/error/error.service';
import { HttpService } from '@core/service/http/http.service';
import { I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';
import { selectUserInfo } from '../selectors/user.selector';
import { setUserInfo } from '../actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<I_USER> {
  constructor(
    private readonly errorService: ErrorService,
    private readonly httpService: HttpService,
    private readonly store: Store<AppState>,
  ) {}

  resolve(): Observable<I_USER> {
    const userInfoFromState$ = this.store.select(selectUserInfo);
    const userInfofromRequest$ = this.httpService.get<I_USER>('auth/getUserInfo').pipe(
      tap((user: I_USER) => this.store.dispatch(setUserInfo({ user }))),
      map((userInfo: I_USER) => userInfo),
      shareReplay(1),
    );

    return userInfoFromState$.pipe(
      switchMap((userInfo: I_USER) => {
        return !!userInfo._id ? of(userInfo) : userInfofromRequest$;
      }),
      take(1),
      map((userInfo: I_USER) => userInfo),
      catchError((error: any) => {
        this.errorService.handleServerError(error);
        throw of(null);
      }),
    );
  }
}
