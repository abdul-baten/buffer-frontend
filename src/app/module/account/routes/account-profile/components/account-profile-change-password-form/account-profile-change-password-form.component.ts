import { CommonValidator } from '@core/validation/common.validation';
import { Component } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@core/validation/password.validation';

@Component({
  selector: 'buffer--account-profile-change-password-form',
  templateUrl: './account-profile-change-password-form.component.html',
  styleUrls: ['./account-profile-change-password-form.component.scss'],
})
export class AccountProfileChangePasswordFormComponent {
  hideCurrentPassword = true;
  hideNewPassword = true;
  hideNewConfirmPassword = true;

  errorStateMatcher = new CustomFormErrorStateMatcher();

  profileChangePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileChangePasswordForm = this.buildAccountProfileChangePasswordForm();
  }

  private buildAccountProfileChangePasswordForm(): FormGroup {
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
