import { CommonValidator, PasswordValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninFacade } from '../../facade/signin.facade';

@Component({
  selector: 'buffer-signin-form',
  styleUrls: ['./signin-form.component.css'],
  templateUrl: './signin-form.component.html'
})
export class SigninFormComponent {
  form_clicked = false;
  form: FormGroup;

  constructor (private formBuilder: FormBuilder, private readonly facade: SigninFacade) {
    this.form = this.buildSigninForm();
  }

  private buildSigninForm (): FormGroup {
    return this.formBuilder.group({
      user_email: ['alamin@technoflame.com', [Validators.required, CommonValidator.emailAddress]],
      user_password: [
        'baten@CAT2019',
        [
          Validators.required,
          Validators.minLength(Number.parseInt('6', 10)),
          PasswordValidator.oneNumber,
          PasswordValidator.oneUpperCase,
          PasswordValidator.oneLowerCase,
          PasswordValidator.allowedPasswordSpecialChars
        ]
      ]
    });
  }

  public login (): void {
    this.form_clicked = true;
    const { user_email, user_password } = this.form.value;

    this.facade.
      loginUser(user_email, user_password).
      pipe(finalize(() => {
        this.form.reset();
        this.form_clicked = false;
      })).
      subscribe(() => this.facade.navigateToDashboard());
  }

  public navigate (route: string): void {
    this.facade.navigate(route);
  }
}
