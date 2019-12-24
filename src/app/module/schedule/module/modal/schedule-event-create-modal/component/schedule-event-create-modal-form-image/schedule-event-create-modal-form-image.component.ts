// Core Modules
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// Facade
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-image',
  templateUrl: './schedule-event-create-modal-form-image.component.html',
  styleUrls: ['./schedule-event-create-modal-form-image.component.scss']
})
export class ScheduleEventCreateModalFormImageComponent {
  nextButtonDisabled = true;
  @Input() formHeaderIcon = 'filter';
  @Input() formHeader = 'Upload your media';

  currentDateTime: Date;

  @Output() closeChooseTypeModal = new EventEmitter<any>();

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  eventCreateTypeImageForm: FormGroup;

  constructor(private stepper: MatStepper, private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.eventCreateTypeImageForm = this.biuldEventCreateTypeImageForm();

    this.scheduleFacade.getPostDate().subscribe(postDate => {
      this.currentDateTime = new Date(postDate);
      this.eventCreateTypeImageForm.patchValue({ postDate: new Date(postDate) });
    });
  }

  private biuldEventCreateTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postDate: new FormControl(null, Validators.required),
      postCaption: new FormControl(null, Validators.required)
    });
  }

  onPreviousButtonClicked(): void {
    this.stepper.previous();
  }

  onNextButtonEnabled(nextButtonDisabled: boolean): void {
    this.nextButtonDisabled = nextButtonDisabled;
  }

  onChooseTypeModalClosed(): void {
    this.closeChooseTypeModal.emit();
  }
}
