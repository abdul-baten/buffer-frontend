import {
  catchError,
  first,
  map,
  switchMap
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import type { Resolve } from '@angular/router';
import type { ConnectionService, ErrorService, UserService } from '../core/service';
import type { IConnection, IUser } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionResolver implements Resolve<IConnection[]> {
  constructor (
    private readonly connectionService: ConnectionService,
    private readonly errorService: ErrorService,
    private readonly userService: UserService
  ) {}

  public resolve (): Observable<IConnection[]> {
    const user_id_from_state$ = this.userService.getUserFromState();
    const connection_from_state$ = this.connectionService.entities$;
    const user_from_server$ =
        user_id_from_state$.pipe(switchMap((user: IUser) => this.connectionService.getConnections(user.id).pipe(map((connections: IConnection[]) => connections))));

    return connection_from_state$.pipe(
      switchMap((connections: IConnection[]) => {
        if (connections.length) {
          return of(connections);
        }

        return user_from_server$;
      }),
      first(),
      catchError((error) => {
        this.errorService.handleServerError(error);

        return throwError(error);
      })
    );
  }
}
