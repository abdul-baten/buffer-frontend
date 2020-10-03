import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import { ConnectionService, ErrorService, UserService } from '../core/service';
import { I_CONNECTION, I_USER } from '../core/model';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionResolver implements Resolve<I_CONNECTION[]> {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly errorService: ErrorService,
    private readonly userService: UserService,
  ) {}

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<I_CONNECTION[]> {
    const userIDFromState$ = this.userService.getUserFromState(),
      connectionsFromState$ = this.connectionService.entities$,
      userInfofromRequest$ = userIDFromState$.pipe(
        switchMap((user: I_USER) => this.connectionService.getConnections(user.id).pipe(map((connections: I_CONNECTION[]) => connections))),
      );

    return connectionsFromState$.pipe(
      switchMap((connections: I_CONNECTION[]) => (!!connections.length ? of(connections) : userInfofromRequest$)),
      first(),
      catchError((error) => {
        this.errorService.handleServerError(error);
        return throwError(error);
      }),
    );
  }
}
