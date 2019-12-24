import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/core/validation/password.validation';
import { CommonValidator } from 'src/app/core/validation/common.validation';

@Component({
  selector: 'buffer--signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup;

  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.buildSignupForm();
  }

  ngOnInit() {}

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
            PasswordValidator.allowedPasswordSpecialChars
          ])
        ),
        confirmPassword: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            PasswordValidator.oneNumber,
            PasswordValidator.oneUpperCase,
            PasswordValidator.oneLowerCase,
            PasswordValidator.allowedPasswordSpecialChars
          ])
        ),
        termsAndCondition: new FormControl(false, Validators.required)
      },
      { validator: PasswordValidator.passwordMismatch }
    );
  }
}
