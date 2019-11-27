import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/core/validation/password.validation';

@Component({
  selector: 'buffer--signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {
  signinForm: FormGroup;

  hidePassword = true;

  constructor(private formBuilder: FormBuilder) {
    this.signinForm = this.buildSigninForm();
  }

  ngOnInit() {}

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
          PasswordValidator.allowedPasswordSpecialChars
        ])
      )
    });
  }
}
