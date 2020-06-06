import { catchError, first, map, switchMap } from 'rxjs/operators';
import { ConnectionService } from '@core/service/connection/connection.service';
import { ErrorService } from '@core/service/error/error.service';
import { I_CONNECTION, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';
import { UserService } from '@core/service/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectionResolver implements Resolve<I_CONNECTION[]> {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly errorService: ErrorService,
    private readonly userService: UserService,
  ) {}

  resolve(): Observable<I_CONNECTION[]> {
    const userIDFromState$ = this.userService.getUserFromState();
    const connectionsFromState$ = this.connectionService.entities$;
    const userInfofromRequest$ = userIDFromState$.pipe(
      switchMap((user: I_USER) => this.connectionService.getConnections(user.id).pipe(map((connections: I_CONNECTION[]) => connections))),
    );

    return connectionsFromState$.pipe(
      switchMap((connections: I_CONNECTION[]) => {
        return !!connections.length ? of(connections) : userInfofromRequest$;
      }),
      map((connections: I_CONNECTION[]) => connections),
      first(),
      catchError((error: any) => {
        this.errorService.handleServerError(error);
        throw of(error);
      }),
    );
  }
}
