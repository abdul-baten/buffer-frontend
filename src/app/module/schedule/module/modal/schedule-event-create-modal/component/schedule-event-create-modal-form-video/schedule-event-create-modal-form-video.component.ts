// Core Modules
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// Facade
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-video',
  templateUrl: './schedule-event-create-modal-form-video.component.html',
  styleUrls: ['./schedule-event-create-modal-form-video.component.scss']
})
export class ScheduleEventCreateModalFormVideoComponent {
  nextButtonDisabled = true;
  @Input() formHeaderIcon = 'filter';
  @Input() formHeader = 'Upload your media';

  currentDateTime: Date;

  @Output() closeChooseTypeModal = new EventEmitter<any>();

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  eventCreateTypeVideoForm: FormGroup;

  constructor(private stepper: MatStepper, private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.eventCreateTypeVideoForm = this.biuldEventCreateTypeImageForm();

    this.scheduleFacade.getPostDate().subscribe(postDate => {
      this.currentDateTime = new Date(postDate);
      this.eventCreateTypeVideoForm.patchValue({ postDate: new Date(postDate) });
    });
  }

  private biuldEventCreateTypeImageForm(): FormGroup {
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

  onChooseTypeModalClosed(): void {
    this.closeChooseTypeModal.emit();
  }
}
