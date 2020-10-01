import { CommonValidator, PasswordValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninFacade } from '../../facade/signin.facade';

@Component({
  selector: 'buffer--signin-form',
  styleUrls: ['./signin-form.component.css'],
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
  formClicked = false;
  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private readonly facade: SigninFacade) {
    this.signinForm = this.buildSigninForm();
  }

  private buildSigninForm(): FormGroup {
    return this.formBuilder.group({
      email: ['alamin@technoflame.com', [Validators.required, CommonValidator.emailAddress]],
      password: [
        'baten@CAT2019',
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
    this.facade
      .loginUser(email, password)
      .pipe(
        finalize(() => {
          this.signinForm.reset();
          this.formClicked = false;
        }),
      )
      .subscribe(() => this.facade.navigateToDashboard());
  }

  handleAuthNavigateBtn(authURL: string): void {
    this.facade.navigate(authURL);
  }
}
