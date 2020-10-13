import { Injectable } from '@angular/core';

import type { AuthService } from 'src/app/core/service';
import type { IUser } from 'src/app/core/model';
import type { Observable } from 'rxjs';
import type { Router } from '@angular/router';

@Injectable()
export class SignupFacade {
  constructor (private readonly authService: AuthService, private readonly router: Router) {}

  public navigate (route: string): void {
    this.router.navigateByUrl(route);
  }

  public signupUser (form_value: Partial<IUser>): Observable<Partial<IUser>> {
    const { user_full_name, user_email, user_password } = form_value;

    return this.authService.signupUser({
      user_email,
      user_full_name,
      user_password
    });
  }
}
