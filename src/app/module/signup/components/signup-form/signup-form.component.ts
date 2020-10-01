import { AppState } from 'src/app/reducers';
import { CommonValidator, PasswordValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_USER } from 'src/app/core/model';
import { noop } from 'rxjs';
import { setUserInfo } from 'src/app/actions';
import { SignupFacade } from '../../facade/signup.facade';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'buffer--signup-form',
  styleUrls: ['./signup-form.component.css'],
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  formClicked = false;
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private signupFacade: SignupFacade, private store: Store<AppState>) {
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

  signUp(): void {
    if (this.signupForm.valid) {
      this.formClicked = true;
      this.signupFacade
        .signupUser(this.signupForm.value)
        .pipe(
          tap((user: I_USER) => {
            this.store.dispatch(setUserInfo({ user }));
            this.signupFacade.navigate('/dashboard');
            this.signupForm.reset();
          }),
        )
        .subscribe(noop);
    }
  }
}
