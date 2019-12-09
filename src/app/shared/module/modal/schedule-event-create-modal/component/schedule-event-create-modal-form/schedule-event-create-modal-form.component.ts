// Core Modules
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

// Enums
import { POST_TYPE } from '../../enum/schedule-event-create-modal.enum';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// COmponents
import { ScheduleEventCreateModalFormTextComponent } from '../schedule-event-create-modal-form text/schedule-event-create-modal-form-text.component';
import { ScheduleEventCreateModalFormImageComponent } from '../schedule-event-create-modal-form-image/schedule-event-create-modal-form-image.component';
import { ScheduleEventCreateModalFormVideoComponent } from '../schedule-event-create-modal-form-video/schedule-event-create-modal-form-video.component';

@Component({
  selector: 'buffer--schedule-event-create-modal-form',
  templateUrl: './schedule-event-create-modal-form.component.html',
  styleUrls: ['./schedule-event-create-modal-form.component.scss']
})
export class ScheduleEventCreateModalFormComponent implements OnInit {
  @ViewChild(MatStepper, { static: true }) stepper: MatStepper;

  @ViewChild(ScheduleEventCreateModalFormTextComponent, { read: true, static: false })
  postTypeTextStep: ScheduleEventCreateModalFormTextComponent;
  @ViewChild(ScheduleEventCreateModalFormImageComponent, { read: true, static: false })
  postTypeImageStep: ScheduleEventCreateModalFormImageComponent;
  @ViewChild(ScheduleEventCreateModalFormVideoComponent, { read: true, static: false })
  postTypeVideoStep: ScheduleEventCreateModalFormVideoComponent;

  get eventCreateTypeTextForm() {
    return this.postTypeTextStep ? this.postTypeTextStep.eventCreateTypeTextForm : null;
  }

  get eventCreateTypeImageForm() {
    return this.postTypeImageStep ? this.postTypeImageStep.eventCreateTypeImageForm : null;
  }

  get eventCreateTypeVideoForm() {
    return this.postTypeVideoStep ? this.postTypeVideoStep.eventCreateTypeVideoForm : null;
  }

  eventCreatePostTypeForm: FormGroup;

  postTypeText = true;
  postTypeImage = true;
  postTypeVideo = true;

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  constructor(private formBuilder: FormBuilder) {
    this.eventCreatePostTypeForm = this.buildEventCreatePostTypeForm();
  }

  ngOnInit() {}

  private buildEventCreatePostTypeForm(): FormGroup {
    return this.formBuilder.group({
      postType: new FormControl('', Validators.required)
    });
  }

  onRadioButtonValueChanged() {
    this.changeFormSteps(this.eventCreatePostTypeForm.value.postType);
    this.stepper.next();
  }

  private changeFormSteps(postType: string): void {
    switch (postType) {
      case POST_TYPE.IMAGE:
        this.postTypeText = false;
        this.postTypeImage = true;
        this.postTypeVideo = false;
        break;
      case POST_TYPE.VIDEO:
        this.postTypeText = false;
        this.postTypeImage = false;
        this.postTypeVideo = true;
        break;
      default:
        this.postTypeText = true;
        this.postTypeImage = false;
        this.postTypeVideo = false;
        break;
    }
  }
}
