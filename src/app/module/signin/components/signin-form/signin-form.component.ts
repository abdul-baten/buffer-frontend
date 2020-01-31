import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@core/validation/password.validation';
import { SigninFacade } from '@app/signin/facade/signin.facade';

@Component({
  selector: 'buffer--signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
  signinForm: FormGroup;

  hidePassword = true;

  errorStateMatcher = new ErrorStateMatcher();

  constructor(private signinFacade: SigninFacade, private formBuilder: FormBuilder) {
    this.signinForm = this.buildSigninForm();
  }

  private buildSigninForm(): FormGroup {
    return this.formBuilder.group({
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
    });
  }

  handleAuthNavigateBtn(authURL: string): void {
    this.signinFacade.navigateToPage(authURL);
  }
}
