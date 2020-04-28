import { Component } from '@angular/core';
import { CountryInterface } from '@core/model/country/country.model';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'buffer--profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  errorStateMatcher = new CustomFormErrorStateMatcher();

  profileSetupForm: FormGroup;

  countries: CountryInterface[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];

  constructor(private formBuilder: FormBuilder) {
    this.profileSetupForm = this.buildProfileSetupForm();
  }

  private buildProfileSetupForm(): FormGroup {
    return this.formBuilder.group({
      profileBio: [''],
      profileCompany: [''],
      profileCountry: ['Bangladesh'],
      profileFirstName: ['', Validators.required],
      profileLastName: ['', Validators.required],
    });
  }
}
