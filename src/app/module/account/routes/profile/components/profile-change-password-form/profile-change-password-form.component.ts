import { CommonValidator } from '@core/validation/common.validation';
import { Component } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@core/validation/password.validation';

@Component({
  selector: 'buffer--profile-change-password-form',
  templateUrl: './profile-change-password-form.component.html',
  styleUrls: ['./profile-change-password-form.component.scss'],
})
export class ProfileChangePasswordFormComponent {
  hideCurrentPassword = true;
  hideNewPassword = true;
  hideNewConfirmPassword = true;

  errorStateMatcher = new CustomFormErrorStateMatcher();

  profileChangePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileChangePasswordForm = this.buildProfileChangePasswordForm();
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
