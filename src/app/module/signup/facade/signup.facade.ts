import { AppState } from 'src/app/reducers';
import { AuthService } from '@core/service/auth/auth.service';
import { I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable()
export class SignupFacade {
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {}

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
