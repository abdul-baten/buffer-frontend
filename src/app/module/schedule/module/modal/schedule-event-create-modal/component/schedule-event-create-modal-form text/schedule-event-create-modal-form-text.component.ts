// Core Modules
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

// Facade
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Validators
import { CommonValidator } from '@core/validation/common.validation';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-text',
  templateUrl: './schedule-event-create-modal-form-text.component.html',
  styleUrls: ['./schedule-event-create-modal-form-text.component.scss']
})
export class ScheduleEventCreateModalFormTextComponent {
  formHeader = 'Write status';
  formHeaderIcon = 'text_fields';

  currentDateTime: Date;

  eventCreateTypeTextForm: FormGroup;

  @Output() closeChooseTypeModal = new EventEmitter<any>();

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  constructor(private formBuilder: FormBuilder, private stepper: MatStepper, private scheduleFacade: ScheduleFacade) {
    this.eventCreateTypeTextForm = this.buildEventCreateTypeTextForm();

    this.scheduleFacade.getPostDate().subscribe(postDate => {
      this.currentDateTime = new Date(postDate);
      this.eventCreateTypeTextForm.patchValue({ postDate: new Date(postDate) });
    });
  }

  private buildEventCreateTypeTextForm(): FormGroup {
    return this.formBuilder.group({
      postLink: new FormControl(null, CommonValidator.validURL),
      postLocation: new FormControl(null),
      postCaption: new FormControl(null, Validators.required),
      postDate: new FormControl(null, Validators.required)
    });
  }

  onPreviousButtonClicked(): void {
    this.stepper.reset();
  }

  onChooseTypeModalClosed(): void {
    this.closeChooseTypeModal.emit();
  }

  onTextFormSubmit(): void {
    if (this.eventCreateTypeTextForm.valid) {
      const { value } = this.eventCreateTypeTextForm;

      this.scheduleFacade.setPostData(value);
    }
  }
}
