import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { I_COUNTRY } from '@core/model';

@Component({
  selector: 'buffer--facebook-profile-selection',
  templateUrl: './facebook-profile-selection.component.html',
  styleUrls: ['./facebook-profile-selection.component.scss'],
})
export class FacebookProfileSelectionComponent {
  countries: I_COUNTRY[] = [
    { name: 'Test Page for Facebook Test Page for fb' },
    { name: 'India' },
    { name: 'Pakistan' },
  ];

  facebookProfileForm: FormGroup;

  constructor(private formBuider: FormBuilder) {
    this.facebookProfileForm = this.buildFacebookProfileForm();
  }

  private buildFacebookProfileForm(): FormGroup {
    return this.formBuider.group({
      facebookProfile: ['Test Page for Facebook Test Page for fb'],
    });
  }
}
