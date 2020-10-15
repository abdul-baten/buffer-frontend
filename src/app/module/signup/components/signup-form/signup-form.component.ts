import { CommonValidator, PasswordValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noop } from 'rxjs';
import { SignupFacade } from '../../facade/signup.facade';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'buffer-signup-form',
  styleUrls: ['./signup-form.component.css'],
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent {
  public form: FormGroup;
  public form_clicked = false;

  constructor (
    private readonly facade: SignupFacade,
    private readonly formBuilder: FormBuilder
  ) {
    this.form = this.buildSignupForm();
  }

  private buildSignupForm (): FormGroup {
    return this.formBuilder.group({
      user_email: ['', [Validators.required, CommonValidator.emailAddress]],
      user_full_name: ['', [Validators.required, Validators.minLength(Number.parseInt('3', 10)), Validators.maxLength(Number.parseInt('50', 10)), CommonValidator.alphaNumeric]],
      user_password: [
        '',
        [
          Validators.required,
          Validators.minLength(Number.parseInt('8', 10)),
          PasswordValidator.oneNumber,
          PasswordValidator.oneUpperCase,
          PasswordValidator.oneLowerCase,
          PasswordValidator.allowedPasswordSpecialChars
        ]
      ]
    });
  }

  public signUp (): void {
    if (this.form.valid) {
      this.form_clicked = true;
      this.facade.
        signupUser(this.form.value).
        pipe(tap(() => {
          this.facade.navigate('/dashboard');
          this.form.reset();
        })).
        subscribe(noop);
    }
  }
}
