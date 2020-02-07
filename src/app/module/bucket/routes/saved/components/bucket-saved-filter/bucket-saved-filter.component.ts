import { Component } from '@angular/core';
import { CountryInterface } from '@core/model/country/country.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'buffer--bucket-saved-filter',
  templateUrl: './bucket-saved-filter.component.html',
  styleUrls: ['./bucket-saved-filter.component.scss'],
})
export class BucketSavedFilterComponent {
  bucketFilterForm: FormGroup;

  countries: CountryInterface[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];

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
