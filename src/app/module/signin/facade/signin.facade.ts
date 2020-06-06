import { AuthService } from '@core/service/auth/auth.service';
import { I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '@core/service/user/user.service';

@Injectable()
export class SigninFacade {
  constructor(private readonly authService: AuthService, private readonly router: Router, private readonly userService: UserService) {}

  navigateToPage(authURL: string): void {
    this.router.navigateByUrl(authURL);
  }

  loginUser(email: string, password: string): Observable<Partial<I_USER>> {
    return this.authService.loginUser(email, password).pipe(
      tap((user: I_USER) => {
        this.userService.addUserToState(user);
      }),
    );
  }
}
