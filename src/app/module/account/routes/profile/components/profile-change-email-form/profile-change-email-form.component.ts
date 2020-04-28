import { Component } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'buffer--profile-change-email-form',
  templateUrl: './profile-change-email-form.component.html',
  styleUrls: ['./profile-change-email-form.component.scss'],
})
export class ProfileChangeEmailFormComponent {
  errorStateMatcher = new CustomFormErrorStateMatcher();

  profileChangeEmailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileChangeEmailForm = this.buildProfileChangeEmailForm();
  }

  private buildProfileChangeEmailForm(): FormGroup {
    return this.formBuilder.group({
      profileEmailAddress: [''],
      profileNewEmailAddress: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }
}
