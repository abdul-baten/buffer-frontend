import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_COUNTRY } from '@core/model';

@Component({
  selector: 'buffer--profile-form',
  styleUrls: ['./profile-form.component.scss'],
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  countries: I_COUNTRY[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];
  profileSetupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileSetupForm = this.buildProfileSetupForm();
  }

  private buildProfileSetupForm(): FormGroup {
    return this.formBuilder.group({
      profileBio: [''],
      profileCountry: ['Bangladesh'],
      profileFirstName: ['', Validators.required],
      profileLastName: ['', Validators.required],
    });
  }
}
