import { AppState } from 'src/app/reducers';
import { CommonValidator } from '@core/validation/common.validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_USER } from '@core/model';
import { PasswordValidator } from '@core/validation/password.validation';
import { setUserInfo } from 'src/app/actions';
import { SignupFacade } from '@app/signup/facade/signup.facade';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'buffer--signup-form',
  styleUrls: ['./signup-form.component.scss'],
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  hideConfirmPassword = true;
  signupForm: FormGroup;

  constructor(private signupFacade: SignupFacade, private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.signupForm = this.buildSignupForm();
  }

  private buildSignupForm(): FormGroup {
    return this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), CommonValidator.alphaNumeric]],
      email: ['', [Validators.required, CommonValidator.emailAddress]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          PasswordValidator.oneNumber,
          PasswordValidator.oneUpperCase,
          PasswordValidator.oneLowerCase,
          PasswordValidator.allowedPasswordSpecialChars,
        ],
      ],
    });
  }

  handleSignup(): void {
    if (this.signupForm.valid) {
      this.signupFacade
        .signupUser(this.signupForm.value)
        .pipe(tap((user: I_USER) => this.store.dispatch(setUserInfo({ user }))))
        .subscribe(() => {
          this.signupFacade.navigateToPage('/join/onboard');
        });
    }
  }
}
