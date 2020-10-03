import { catchError, first, map, switchMap, take } from 'rxjs/operators';
import { ConnectionService } from './connection.service';
import { ErrorService } from './error.service';
import { I_CONNECTION, I_USER } from '../model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserConnectionService {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly errorService: ErrorService,
    private readonly userService: UserService,
  ) {}

  private getUser(): Observable<I_USER> {
    const userFromState$ = this.userService.entities$,
      userFromResponse$ = this.userService.getUser();

    return userFromState$.pipe(
      switchMap((users: I_USER[]) => (!!users.length ? of(users[0]) : userFromResponse$)),
      take(1),
    );
  }

  private getConnections(): Observable<I_CONNECTION[]> {
    const userIDFromState$ = this.userService.getUserFromState(),
      connectionsFromState$ = this.connectionService.entities$,
      userInfofromRequest$ = userIDFromState$.pipe(
        switchMap((user: I_USER) => this.connectionService.getConnections(user.id).pipe(map((connections: I_CONNECTION[]) => connections))),
      );

    return connectionsFromState$.pipe(
      switchMap((connections: I_CONNECTION[]) => (!!connections.length ? of(connections) : userInfofromRequest$)),
      map((connections: I_CONNECTION[]) => connections),
      first(),
    );
  }

  resolve(): Observable<I_CONNECTION[]> {
    return this.getUser().pipe(
      switchMap(() => this.getConnections()),
      catchError((error) => {
        this.errorService.handleServerError(error);
        throw of(null);
      }),
    );
  }
}
