import { Component } from '@angular/core';
import { CountryInterface } from '@core/model/country/country.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'buffer--facebook-profile-selection',
  templateUrl: './facebook-profile-selection.component.html',
  styleUrls: ['./facebook-profile-selection.component.scss'],
})
export class FacebookProfileSelectionComponent {
  countries: CountryInterface[] = [
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
