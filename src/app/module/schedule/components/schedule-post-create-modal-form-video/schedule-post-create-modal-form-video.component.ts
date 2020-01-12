// Core Modules
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, HostListener, OnDestroy } from '@angular/core';

// Third Party Modules
import { SubSink } from 'subsink';
import { MatStepper } from '@angular/material/stepper';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-post-create-modal-form-video',
  templateUrl: './schedule-post-create-modal-form-video.component.html',
  styleUrls: ['./schedule-post-create-modal-form-video.component.scss']
})
export class SchedulePostCreateModalFormVideoComponent implements OnDestroy {
  nextButtonDisabled = true;
  @Input() formHeaderIcon = 'filter';
  @Input() formHeader = 'Upload your media';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  eventCreateTypeVideoForm: FormGroup;

  constructor(private stepper: MatStepper, private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.eventCreateTypeVideoForm = this.biuldPostCreateTypeImageForm();

    this.subscriptions$.add(
      this.scheduleFacade.getPostDate().subscribe(postDate => {
        this.currentDateTime = new Date(postDate);
        this.eventCreateTypeVideoForm.patchValue({ postDate: new Date(postDate) });
      })
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private biuldPostCreateTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postDate: [null, Validators.required],
      postCaption: [null, Validators.required]
    });
  }

  onPreviousButtonClicked(): void {
    this.stepper.previous();
  }

  onNextButtonEnabled(nextButtonDisabled: boolean): void {
    this.nextButtonDisabled = nextButtonDisabled;
  }
}
