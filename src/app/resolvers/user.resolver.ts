import { catchError, switchMap, take } from 'rxjs/operators';
import { ErrorService } from '@core/service/error/error.service';
import { I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';
import { UserService } from '@core/service/user/user.service';

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
