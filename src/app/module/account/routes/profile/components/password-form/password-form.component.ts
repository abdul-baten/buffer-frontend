import { CommonValidator, PasswordValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'buffer--password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent {
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.passwordForm = this.buildProfileChangePasswordForm();
  }

  private buildProfileChangePasswordForm(): FormGroup {
    return this.formBuilder.group(
      {
        profilePassword: [''],
        profileNewPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            PasswordValidator.oneNumber,
            PasswordValidator.oneUpperCase,
            PasswordValidator.oneLowerCase,
            PasswordValidator.allowedPasswordSpecialChars,
          ]),
        ],
        profileNewConfirmPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            PasswordValidator.oneNumber,
            PasswordValidator.oneUpperCase,
            PasswordValidator.oneLowerCase,
            PasswordValidator.allowedPasswordSpecialChars,
          ]),
        ],
      },
      { validator: CommonValidator.compareTwoFields('profileNewPassword', 'profileNewConfirmPassword') },
    );
  }
}
