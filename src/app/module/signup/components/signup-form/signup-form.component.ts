import { CommonValidator } from '@core/validation/common.validation';
import { Component } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@core/validation/password.validation';
import { SignupFacade } from '@app/signup/facade/signup.facade';

@Component({
  selector: 'buffer--signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  signupForm: FormGroup;

  hidePassword = true;
  hideConfirmPassword = true;

  errorStateMatcher = new CustomFormErrorStateMatcher();

  constructor(private signupFacade: SignupFacade, private formBuilder: FormBuilder) {
    this.signupForm = this.buildSignupForm();
  }

  private buildSignupForm(): FormGroup {
    return this.formBuilder.group(
      {
        firstName: new FormControl('', Validators.compose([Validators.required, CommonValidator.alphaNumeric])),
        lastName: new FormControl('', Validators.compose([Validators.required, CommonValidator.alphaNumeric])),
        emailAddress: new FormControl('', Validators.compose([Validators.required, Validators.email])),
        password: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            PasswordValidator.oneNumber,
            PasswordValidator.oneUpperCase,
            PasswordValidator.oneLowerCase,
            PasswordValidator.allowedPasswordSpecialChars,
          ]),
        ),
        confirmPassword: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            PasswordValidator.oneNumber,
            PasswordValidator.oneUpperCase,
            PasswordValidator.oneLowerCase,
            PasswordValidator.allowedPasswordSpecialChars,
          ]),
        ),
      },
      { validator: PasswordValidator.passwordMismatch },
    );
  }

  handleAuthNavigateBtn(authURL: string): void {
    this.signupFacade.navigateToPage(authURL);
  }
}
