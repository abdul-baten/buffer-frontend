import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import type { AuthService, GlobalService, UserService } from 'src/app/core/service';
import type { IUser } from 'src/app/core/model';
import type { Observable } from 'rxjs';
import type { Router } from '@angular/router';

@Injectable()
export class SigninFacade {
  constructor (
    private readonly authService: AuthService,
    private readonly globalService: GlobalService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public navigate (route: string): void {
    this.router.navigateByUrl(route);
  }

  public loginUser (user_email: string, user_password: string): Observable<Partial<IUser>> {
    return this.authService.loginUser(user_email, user_password).pipe(tap((user: Partial<IUser>) => this.userService.addUserToState(user as IUser)));
  }

  public navigateToDashboard (): void {
    this.globalService.getLocation().replace('/dashboard');
  }
}
