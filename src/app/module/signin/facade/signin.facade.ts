// Core Modules
import { Injectable } from '@angular/core';

// Services
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Router } from '@angular/router';
import { AuthService } from '@core/service/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '@core/model/user/user.model';

@Injectable()
export class SigninFacade {
  constructor(
    private router: Router,
    private documentTitleService: DocumentTitleService,
    private authService: AuthService,
  ) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }

  navigateToPage(authURL: string): void {
    this.router.navigateByUrl(authURL);
  }

  loginUser(email: string, password: string): Observable<User> {
    return this.authService.loginUser(email, password);
  }
}
