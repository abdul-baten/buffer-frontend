import { AuthService } from '@core/service/auth/auth.service';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '@core/model/user/user.model';

@Injectable()
export class SigninFacade {
  constructor(
    private authService: AuthService,
    private documentTitleService: DocumentTitleService,
    private router: Router,
  ) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }

  navigateToPage(authURL: string): void {
    this.router.navigateByUrl(authURL);
  }

  loginUser(email: string, password: string): Observable<Partial<IUser>> {
    return this.authService.loginUser(email, password);
  }
}
