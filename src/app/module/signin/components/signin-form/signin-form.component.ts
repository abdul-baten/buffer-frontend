import { CommonValidator } from '@core/validation/common.validation';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@core/validation/password.validation';
import { SigninFacade } from '@app/signin/facade/signin.facade';

@Component({
  selector: 'buffer--signin-form',
  styleUrls: ['./signin-form.component.scss'],
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
  formClicked = false;
  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private signinFacade: SigninFacade) {
    this.signinForm = this.buildSigninForm();
  }

  private buildSigninForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, CommonValidator.emailAddress]],
      password: [
        null,
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
    this.formClicked = true;
    const { email, password } = this.signinForm.value;
    this.signinFacade
      .loginUser(email, password)
      .pipe(
        finalize(() => {
          this.signinForm.reset();
          this.formClicked = false;
        }),
      )
      .subscribe(() => location.replace('/dashboard'));
  }

  handleAuthNavigateBtn(authURL: string): void {
    this.signinFacade.navigate(authURL);
  }
}
