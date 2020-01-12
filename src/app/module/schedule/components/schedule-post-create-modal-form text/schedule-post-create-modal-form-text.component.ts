// Core Modules
import { Component, OnDestroy, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// Third Party Modules
import { SubSink } from 'subsink';
import { MatStepper } from '@angular/material/stepper';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

// Validators
import { CommonValidator } from '@core/validation/common.validation';

@Component({
  selector: 'buffer--schedule-post-create-modal-form-text',
  templateUrl: './schedule-post-create-modal-form-text.component.html',
  styleUrls: ['./schedule-post-create-modal-form-text.component.scss'],
})
export class SchedulePostCreateModalFormTextComponent implements OnDestroy {
  formHeader = 'Write status';
  formHeaderIcon = 'text_fields';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventCreateTypeTextForm: FormGroup;

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  constructor(private formBuilder: FormBuilder, private stepper: MatStepper, private scheduleFacade: ScheduleFacade) {
    this.eventCreateTypeTextForm = this.buildPostCreateTypeTextForm();

    this.subscriptions$.add(
      this.scheduleFacade.getPostDate().subscribe(postDate => {
        this.currentDateTime = new Date(postDate);
        this.eventCreateTypeTextForm.patchValue({ postDate: new Date(postDate) });
      }),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private buildPostCreateTypeTextForm(): FormGroup {
    return this.formBuilder.group({
      postLocation: null,
      postDate: [null, Validators.required],
      postCaption: [null, Validators.required],
      postLink: [null, CommonValidator.validURL],
    });
  }

  onPreviousButtonClicked(): void {
    this.stepper.reset();
  }

  onChooseTypeModalClosed(): void {
    this.scheduleFacade.setPostCreateModalObservable();
  }

  onTextFormSubmit(): void {
    if (this.eventCreateTypeTextForm.valid) {
      const { value } = this.eventCreateTypeTextForm;

      this.scheduleFacade.setPostData(value);
      this.onChooseTypeModalClosed();
      this.scheduleFacade.removePostData();
    }
  }
}
