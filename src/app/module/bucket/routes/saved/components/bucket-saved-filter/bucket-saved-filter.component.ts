import { Component } from '@angular/core';
import { I_COUNTRY } from '@core/model/country.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'buffer--bucket-saved-filter',
  templateUrl: './bucket-saved-filter.component.html',
  styleUrls: ['./bucket-saved-filter.component.scss'],
})
export class BucketSavedFilterComponent {
  bucketFilterForm: FormGroup;

  countries: I_COUNTRY[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];

  constructor(private formBuilder: FormBuilder) {
    this.bucketFilterForm = this.buildBucketFilterForm();
  }

  private buildBucketFilterForm(): FormGroup {
    return this.formBuilder.group({
      postType: [''],
      profile: [''],
      searchText: [''],
      timeline: [['Bangladesh']],
    });
  }
}
