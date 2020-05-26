import { AppState } from 'src/app/reducers';
import { AuthService } from '@core/service/auth/auth.service';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable()
export class SigninFacade {
  constructor(
    private authService: AuthService,
    private documentTitleService: DocumentTitleService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }

  navigateToPage(authURL: string): void {
    this.router.navigateByUrl(authURL);
  }

  loginUser(email: string, password: string): Observable<Partial<I_USER>> {
    return this.authService.loginUser(email, password).pipe(
      tap((user: I_USER) => {
        this.store.dispatch(setUserInfo({ user }));
      }),
    );
  }
}
