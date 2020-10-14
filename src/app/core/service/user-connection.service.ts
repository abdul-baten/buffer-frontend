import {
  catchError,
  first,
  map,
  switchMap,
  take
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConnectionService } from './connection.service';
import { ErrorService } from './error.service';
import { IConnection, IUser } from '../model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserConnectionService {
  constructor (
    private readonly connectionService: ConnectionService,
    private readonly errorService: ErrorService,
    private readonly userService: UserService
  ) {}

  private getUser (): Observable<IUser> {
    const user_from_state$ = this.userService.entities$;
    const user_from_server$ = this.userService.getUser();

    return user_from_state$.pipe(
      switchMap((users: IUser[]) => {
        if (users.length) {
          return of(users[0]);
        }

        return user_from_server$;
      }),
      take(1)
    );
  }

  private getConnections (): Observable<IConnection[]> {
    const user_from_state$ = this.userService.getUserFromState();
    const connections_from_state$ = this.connectionService.entities$;
    const user_info_from_server$ =
      user_from_state$.pipe(switchMap((user: IUser) => this.connectionService.getConnections(user.id).pipe(map((connections: IConnection[]) => connections))));

    return connections_from_state$.pipe(
      switchMap((connections: IConnection[]) => {
        if (connections.length) {
          return of(connections);
        }

        return user_info_from_server$;
      }),
      map((connections: IConnection[]) => connections),
      first()
    );
  }

  public resolve (): Observable<IConnection[]> {
    return this.getUser().pipe(
      switchMap(() => this.getConnections()),
      catchError((error) => {
        this.errorService.handleServerError(error);
        throw of(null);
      })
    );
  }
}
