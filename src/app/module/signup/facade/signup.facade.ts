import { AppState } from 'src/app/reducers';
import { AuthService } from '@core/service/auth/auth.service';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { IMember } from '@core/model/member/member.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { setMemberInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { User } from '@core/model/user/user.model';

@Injectable()
export class SignupFacade {
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

  signupUser(formValue: User): Observable<User> {
    const { fullName, email, password } = formValue;
    return this.authService.signupUser({ fullName, email, password });
  }

  onboardUser(memberInfo: IMember): Observable<IMember> {
    return this.authService.onboardUser(memberInfo).pipe(
      tap((member: IMember) => {
        this.store.dispatch(setMemberInfo({ member }));
      }),
    );
  }
}
