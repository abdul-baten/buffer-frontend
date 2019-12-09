// Core Modules
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Third Party Modules

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-text',
  templateUrl: './schedule-event-create-modal-form-text.component.html',
  styleUrls: ['./schedule-event-create-modal-form-text.component.scss']
})
export class ScheduleEventCreateModalFormTextComponent implements OnInit {
  eventCreateTypeTextForm: FormGroup;

  eventCreatePostFormErrorMatcher = new CustomFormStateMatcher();

  constructor(private formBuilder: FormBuilder, private stepper: MatStepper) {
    this.eventCreateTypeTextForm = this.buildEventCreatePostForm();
  }

  ngOnInit() {}

  private buildEventCreatePostForm(): FormGroup {
    return this.formBuilder.group({
      postLink: new FormControl(''),
      postLocation: new FormControl(''),
      postText: new FormControl('', Validators.required)
    });
  }

  onPreviousButtonClicked(): void {
    this.stepper.reset();
  }
}
