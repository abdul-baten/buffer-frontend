// Core Modules
import { Component, Input, HostListener, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Third Party Modules
import { SubSink } from 'subsink';
import { MatStepper } from '@angular/material/stepper';

// Error States
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--post-create-modal-form-image',
  templateUrl: './post-create-modal-form-image.component.html',
  styleUrls: ['./post-create-modal-form-image.component.scss'],
})
export class PostCreateModalFormImageComponent implements OnDestroy {
  nextButtonDisabled = true;
  @Input() formHeaderIcon = 'filter';
  @Input() formHeader = 'Upload your media';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventCreatePostFormErrorMatcher = new CustomFormErrorStateMatcher();

  eventCreateTypeImageForm: FormGroup;

  constructor(private stepper: MatStepper, private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.eventCreateTypeImageForm = this.biuldPostCreateTypeImageForm();

    this.subscriptions$.add(
      this.scheduleFacade.getPostDate().subscribe(postDate => {
        this.currentDateTime = new Date(postDate);
        this.eventCreateTypeImageForm.patchValue({ postDate: new Date(postDate) });
      }),
    );
  }

  private biuldPostCreateTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postDate: new FormControl(null, Validators.required),
      postCaption: new FormControl(null, Validators.required),
    });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  onPreviousButtonClicked(): void {
    this.stepper.previous();
  }

  onNextButtonEnabled(nextButtonDisabled: boolean): void {
    this.nextButtonDisabled = nextButtonDisabled;
  }
}
