import { CommonValidator } from '@core/validation/common.validation';
import { Component } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@core/validation/password.validation';
import { SigninFacade } from '@app/signin/facade/signin.facade';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'buffer--signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
  hidePassword = true;
  loading = false;
  signinForm: FormGroup;

  errorStateMatcher = new CustomFormErrorStateMatcher();

  constructor(private signinFacade: SigninFacade, private formBuilder: FormBuilder) {
    this.signinForm = this.buildSigninForm();
  }

  private buildSigninForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, CommonValidator.emailAddress]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          PasswordValidator.oneNumber,
          PasswordValidator.oneUpperCase,
          PasswordValidator.oneLowerCase,
          PasswordValidator.allowedPasswordSpecialChars,
        ],
      ],
    });
  }

  login(): void {
    this.loading = true;
    const { email, password } = this.signinForm.value;
    this.signinFacade
      .login(email, password)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => this.signinFacade.navigateToPage('/dashboard'));
  }

  handleAuthNavigateBtn(authURL: string): void {
    this.signinFacade.navigateToPage(authURL);
  }
}
