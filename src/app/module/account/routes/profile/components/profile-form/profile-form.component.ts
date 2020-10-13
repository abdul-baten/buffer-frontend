import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import type { ICountry } from 'src/app/core/model';

@Component({
  selector: 'buffer-profile-form',
  styleUrls: ['./profile-form.component.css'],
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent {
  form: FormGroup;
  countries: ICountry[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];
  constructor (private formBuilder: FormBuilder) {
    this.form = this.buildProfileSetupForm();
  }

  private buildProfileSetupForm (): FormGroup {
    return this.formBuilder.group({
      user_bio: [''],
      user_country: [''],
      user_email: ['', Validators.compose([Validators.required, Validators.email])],
      user_first_name: ['', Validators.required],
      user_last_name: ['', Validators.required],
      user_time_zone: ['']
    });
  }
}
