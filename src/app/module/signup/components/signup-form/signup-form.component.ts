import { CommonValidator, PasswordValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';

import type { SignupFacade } from '../../facade/signup.facade';

@Component({
  selector: 'buffer-signup-form',
  styleUrls: ['./signup-form.component.css'],
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent {
  form_clicked = false;
  form: FormGroup;

  constructor (private formBuilder: FormBuilder, private signupFacade: SignupFacade) {
    this.form = this.buildSignupForm();
  }

  private buildSignupForm (): FormGroup {
    return this.formBuilder.group({
      user_email: ['', [Validators.required, CommonValidator.emailAddress]],
      user_full_name: ['', [Validators.required, Validators.minLength(parseInt('3', 10)), Validators.maxLength(parseInt('50', 10)), CommonValidator.alphaNumeric]],
      user_password: [
        '',
        [
          Validators.required,
          Validators.minLength(parseInt('8', 10)),
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
      this.signupFacade.
        signupUser(this.form.value).
        pipe(tap(() => {
          this.signupFacade.navigate('/dashboard');
          this.form.reset();
        })).
        subscribe(noop);
    }
  }
}
