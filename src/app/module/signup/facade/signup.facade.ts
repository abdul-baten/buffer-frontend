import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { AuthService } from '@core/service/auth/auth.service';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Injectable } from '@angular/core';
import { IUser } from '@core/model/user/user.model';
import { Observable, Subscription } from 'rxjs';
import { selectUserEmail } from 'src/app/selectors/user.selector';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { tap, switchMap } from 'rxjs/operators';

@Injectable()
export class SignupFacade {
  constructor(
    private authService: AuthService,
    private documentTitleService: DocumentTitleService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  setDocumentTitle(activatedRoute: ActivatedRoute): Subscription {
    return this.documentTitleService.setDocumentTitleFromRouteData(activatedRoute);
  }

  navigateToPage(authURL: string): void {
    this.router.navigateByUrl(authURL);
  }

  signupUser(formValue: Partial<IUser>): Observable<Partial<IUser>> {
    const { fullName, email, password } = formValue;
    return this.authService
      .signupUser({ fullName, email, password })
      .pipe(tap((user: Partial<IUser>) => this.store.dispatch(setUserInfo({ user }))));
  }

  onboardUser(memberInfo: Partial<IUser>): Observable<Partial<IUser>> {
    return this.store.select(selectUserEmail).pipe(
      switchMap((email: string) => {
        return this.authService
          .onboardUser({ email, ...memberInfo })
          .pipe(tap((user: Partial<IUser>) => this.store.dispatch(setUserInfo({ user }))));
      }),
    );
  }
}
