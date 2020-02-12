import { Component } from '@angular/core';
import { CountryInterface } from '@core/model/country/country.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'buffer--facebook-date-selection',
  templateUrl: './facebook-date-selection.component.html',
  styleUrls: ['./facebook-date-selection.component.scss'],
})
export class FacebookDateSelectionComponent {
  countries: CountryInterface[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];

  profileDateSelectionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileDateSelectionForm = this.buildProfileDateSelectionForm();
  }

  private buildProfileDateSelectionForm(): FormGroup {
    return this.formBuilder.group({
      profileDateRange: [],
      profileCustomDateRange: [],
    });
  }
}
