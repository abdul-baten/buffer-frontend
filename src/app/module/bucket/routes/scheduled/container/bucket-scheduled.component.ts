import { ActivatedRoute } from '@angular/router';
import { BucketScheduledFacade } from '../facade/bucket-scheduled.facade';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CountryInterface } from '@core/model/country/country.model';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { DocumentInterface } from '@core/model/document/document.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--bucket-scheduled',
  templateUrl: './bucket-scheduled.component.html',
  styleUrls: ['./bucket-scheduled.component.scss'],
})
export class BucketScheduledComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  errorStateMatcher = new CustomFormErrorStateMatcher();

  profileSetupForm: FormGroup;

  countries: CountryInterface[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bucketScheduledFacade: BucketScheduledFacade,
    private formBuilder: FormBuilder,
  ) {
    this.profileSetupForm = this.buildAccountProfileSetupForm();
  }

  ngOnInit() {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((data: DocumentInterface) =>
        this.bucketScheduledFacade.setDocumentTitle(data.title),
      ),
    );
  }

  private buildAccountProfileSetupForm(): FormGroup {
    return this.formBuilder.group({
      profileBio: [''],
      profileCompany: [''],
      profileCountry: ['Bangladesh'],
      profileFirstName: ['', Validators.required],
      profileLastName: ['', Validators.required],
    });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
