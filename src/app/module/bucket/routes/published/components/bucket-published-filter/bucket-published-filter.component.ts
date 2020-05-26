import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { I_COUNTRY } from '@core/model/country.model';

@Component({
  selector: 'buffer--bucket-published-filter',
  templateUrl: './bucket-published-filter.component.html',
  styleUrls: ['./bucket-published-filter.component.scss'],
})
export class BucketPublishedFilterComponent {
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
