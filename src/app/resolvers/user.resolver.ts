import { catchError, first, switchMap } from 'rxjs/operators';
import { ErrorService, UserService } from '../core/service';
import { Injectable } from '@angular/core';
import { IUser } from '../core/model';
import { Observable, of, throwError } from 'rxjs';
import { Resolve } from '@angular/router';

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
      first(),
      catchError((error) => {
        this.errorService.handleServerError(error);

        return throwError(error);
      })
    );
  }
}
