import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/core/validation/password.validation';
import { CommonValidator } from 'src/app/core/validation/common.validation';
import { debounceTime, distinctUntilChanged, share } from 'rxjs/operators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup;

  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.buildSignupForm();

    this.signupForm.valueChanges.pipe(debounceTime(10), share(), distinctUntilChanged()).subscribe(() => {
      console.log(this.signupForm);
      console.log(this.signupForm.valid);
    });
  }

  ngOnInit() {}

  private buildSignupForm(): FormGroup {
    return this.formBuilder.group(
      {
        userName: new FormControl('', Validators.compose([Validators.required, CommonValidator.alphaNumeric])),
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
