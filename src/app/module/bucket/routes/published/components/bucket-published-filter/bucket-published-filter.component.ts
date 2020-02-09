import { Component } from '@angular/core';
import { CountryInterface } from '@core/model/country/country.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'buffer--bucket-published-filter',
  templateUrl: './bucket-published-filter.component.html',
  styleUrls: ['./bucket-published-filter.component.scss'],
})
export class BucketPublishedFilterComponent {
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
