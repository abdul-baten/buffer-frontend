import { catchError, switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Resolve } from '@angular/router';
import { ErrorService, UserService } from '../core/service';
import { IUser } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
  constructor (private readonly errorService: ErrorService, private readonly userService: UserService) {}

  public resolve (): Observable<IUser> {
    const user_form_state$ = this.userService.entities$;
    const user_from_server$ = this.userService.getUser();

    return user_form_state$.pipe(
      switchMap((users: IUser[]) => {
        if (users.length) {
          return of(users[0]);
        }

        return user_from_server$;
      }),
      take(1),
      catchError((error) => {
        console.warn(error);

        this.errorService.handleServerError(error);

        return throwError(error);
      })
    );
  }
}
