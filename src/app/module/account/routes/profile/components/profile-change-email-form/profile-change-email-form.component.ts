import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'buffer--profile-change-email-form',
  styleUrls: ['./profile-change-email-form.component.scss'],
  templateUrl: './profile-change-email-form.component.html',
})
export class ProfileChangeEmailFormComponent {
  profileChangeEmailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileChangeEmailForm = this.buildProfileChangeEmailForm();
  }

  private buildProfileChangeEmailForm(): FormGroup {
    return this.formBuilder.group({
      profileEmailAddress: ['', Validators.compose([Validators.required, Validators.email])],
      profileNewEmailAddress: ['', Validators.compose([Validators.required, Validators.email])],
      profileSentEmail: [],
    });
  }
}
