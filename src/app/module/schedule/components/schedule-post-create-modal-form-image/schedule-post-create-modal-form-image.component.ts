// Core Modules
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// Facade
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-post-create-modal-form-image',
  templateUrl: './schedule-post-create-modal-form-image.component.html',
  styleUrls: ['./schedule-post-create-modal-form-image.component.scss']
})
export class SchedulePostCreateModalFormImageComponent {
  nextButtonDisabled = true;
  @Input() formHeaderIcon = 'filter';
  @Input() formHeader = 'Upload your media';

  currentDateTime: Date;

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  eventCreateTypeImageForm: FormGroup;

  constructor(private stepper: MatStepper, private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.eventCreateTypeImageForm = this.biuldPostCreateTypeImageForm();

    this.scheduleFacade.getPostDate().subscribe(postDate => {
      this.currentDateTime = new Date(postDate);
      this.eventCreateTypeImageForm.patchValue({ postDate: new Date(postDate) });
    });
  }

  private biuldPostCreateTypeImageForm(): FormGroup {
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
}
