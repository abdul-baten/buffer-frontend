import { CommonValidator, PasswordValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'buffer-password-form',
  styleUrls: ['./password-form.component.css'],
  templateUrl: './password-form.component.html'
})
export class PasswordFormComponent {
  form: FormGroup;

  constructor (private formBuilder: FormBuilder) {
    this.form = this.buildProfileChangePasswordForm();
  }

  private buildProfileChangePasswordForm (): FormGroup {
    return this.formBuilder.group(
      {
        confirm_password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(Number.parseInt('8', 10)),
            PasswordValidator.oneNumber,
            PasswordValidator.oneUpperCase,
            PasswordValidator.oneLowerCase,
            PasswordValidator.allowedPasswordSpecialChars
          ])
        ],
        new_password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(Number.parseInt('8', 10)),
            PasswordValidator.oneNumber,
            PasswordValidator.oneUpperCase,
            PasswordValidator.oneLowerCase,
            PasswordValidator.allowedPasswordSpecialChars
          ])
        ],
        user_password: ['']
      },
      { validator: CommonValidator.compareTwoFields('new_password', 'confirm_password') }
    );
  }
}
