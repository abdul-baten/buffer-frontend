import { AuthService, GlobalService, UserService } from 'src/app/core/service';
import { I_USER } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class SigninFacade {
  constructor(
    private readonly authService: AuthService,
    private readonly globalService: GlobalService,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  navigate(authURL: string): void {
    this.router.navigateByUrl(authURL);
  }

  loginUser(email: string, password: string): Observable<Partial<I_USER>> {
    return this.authService.loginUser(email, password).pipe(
      tap((user: I_USER) => {
        this.userService.addUserToState(user);
      }),
    );
  }

  navigateToDashboard(): void {
    this.globalService.getLocation().replace('/dashboard');
  }
}
