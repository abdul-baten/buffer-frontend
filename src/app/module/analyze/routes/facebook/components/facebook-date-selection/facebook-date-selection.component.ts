import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { I_COUNTRY } from '@core/model';

@Component({
  selector: 'buffer--facebook-date-selection',
  templateUrl: './facebook-date-selection.component.html',
  styleUrls: ['./facebook-date-selection.component.scss'],
})
export class FacebookDateSelectionComponent {
  countries: I_COUNTRY[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];

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
