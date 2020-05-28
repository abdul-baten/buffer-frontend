import { AppState } from '../reducers';
import { catchError, first, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ErrorService } from '@core/service/error/error.service';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '@core/service/http/http.service';
import { I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';
import { selectAllConnection } from '../selectors/connection.selector';
import { selectUserId } from '../selectors/user.selector';
import { setConnection } from '../actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ConnectionResolver implements Resolve<I_CONNECTION[]> {
  constructor(
    private readonly errorService: ErrorService,
    private readonly httpService: HttpService,
    private readonly store: Store<AppState>,
  ) {}

  resolve(): Observable<I_CONNECTION[]> {
    const userIDFromState$ = this.store.select(selectUserId);
    const connectionsFromState$ = this.store.select(selectAllConnection);
    const userInfofromRequest$ = userIDFromState$.pipe(
      switchMap((userID: string) => {
        return this.httpService
          .get<I_CONNECTION[]>('connection/getConnections', ({ userID } as unknown) as HttpParams)
          .pipe(
            tap((connections: I_CONNECTION[]) => {
              connections.forEach((connection: I_CONNECTION) => this.store.dispatch(setConnection({ connection })));
            }),
            map((connections: I_CONNECTION[]) => connections),
            shareReplay(1),
          );
      }),
    );

    return connectionsFromState$.pipe(
      switchMap((connections: I_CONNECTION[]) => {
        return !!connections.length ? of(connections) : userInfofromRequest$;
      }),
      map((connections: I_CONNECTION[]) => connections),
      first(),
      catchError((error: any) => {
        this.errorService.handleServerError(error);
        throw of(null);
      }),
    );
  }
}
