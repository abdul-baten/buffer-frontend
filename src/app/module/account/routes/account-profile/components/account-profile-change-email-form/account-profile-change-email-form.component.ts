import { Component } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'buffer--account-profile-change-email-form',
  templateUrl: './account-profile-change-email-form.component.html',
  styleUrls: ['./account-profile-change-email-form.component.scss'],
})
export class AccountProfileChangeEmailFormComponent {
  errorStateMatcher = new CustomFormErrorStateMatcher();

  profileChangeEmailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileChangeEmailForm = this.buildAccountProfileChangeEmailForm();
  }

  private buildAccountProfileChangeEmailForm(): FormGroup {
    return this.formBuilder.group({
      profileEmailAddress: [''],
      profileNewEmailAddress: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }
}
