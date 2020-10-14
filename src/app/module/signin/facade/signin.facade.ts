import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService, UserService } from 'src/app/core/service';
import { IUser } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class SigninFacade {
  constructor (
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public navigate (route: string): void {
    this.router.navigate([route]);
  }

  public loginUser (user_email: string, user_password: string): Observable<Partial<IUser>> {
    return this.authService.loginUser(user_email, user_password).pipe(tap((user: Partial<IUser>) => this.userService.addUserToState(user as IUser)));
  }

  public navigateToDashboard (): void {
    this.navigate('/dashboard');
  }
}
