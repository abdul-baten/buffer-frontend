import { AppState } from 'src/app/reducers';
import { AuthService } from 'src/app/core/service';
import { I_USER } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable()
export class SignupFacade {
  constructor(private readonly authService: AuthService, private readonly router: Router, private store: Store<AppState>) {}

  navigate(authURL: string): void {
    this.router.navigateByUrl(authURL);
  }

  signupUser(formValue: Partial<I_USER>): Observable<Partial<I_USER>> {
    const { fullName, email, password } = formValue;
    return this.authService.signupUser({ fullName, email, password }).pipe(
      tap((user: Partial<I_USER>) => {
        this.store.dispatch(setUserInfo({ user }));
      }),
    );
  }
}
