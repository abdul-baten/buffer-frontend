import { catchError, switchMap, take } from 'rxjs/operators';
import { ErrorService, UserService } from '../core/service';
import { I_USER } from '../core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<I_USER> {
  constructor(private readonly errorService: ErrorService, private readonly userService: UserService) {}

  resolve(): Observable<I_USER> {
    const userFromState$ = this.userService.entities$;
    const userFromResponse$ = this.userService.getUser();

    return userFromState$.pipe(
      switchMap((users: I_USER[]) => (!!users.length ? of(users[0]) : userFromResponse$)),
      take(1),
      catchError((error: any) => {
        this.errorService.handleServerError(error);
        throw of(null);
      }),
    );
  }
}
