// Core Modules
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

// Facade
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Validators
import { CommonValidator } from '@core/validation/common.validation';

@Component({
  selector: 'buffer--schedule-post-create-modal-form-text',
  templateUrl: './schedule-post-create-modal-form-text.component.html',
  styleUrls: ['./schedule-post-create-modal-form-text.component.scss']
})
export class SchedulePostCreateModalFormTextComponent {
  formHeader = 'Write status';
  formHeaderIcon = 'text_fields';

  currentDateTime: Date;

  eventCreateTypeTextForm: FormGroup;

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  constructor(private formBuilder: FormBuilder, private stepper: MatStepper, private scheduleFacade: ScheduleFacade) {
    this.eventCreateTypeTextForm = this.buildPostCreateTypeTextForm();

    this.scheduleFacade.getPostDate().subscribe(postDate => {
      this.currentDateTime = new Date(postDate);
      this.eventCreateTypeTextForm.patchValue({ postDate: new Date(postDate) });
    });
  }

  private buildPostCreateTypeTextForm(): FormGroup {
    return this.formBuilder.group({
      postLocation: null,
      postDate: [null, Validators.required],
      postCaption: [null, Validators.required],
      postLink: [null, CommonValidator.validURL]
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
