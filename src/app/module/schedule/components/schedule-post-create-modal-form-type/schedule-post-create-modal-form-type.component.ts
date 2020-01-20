// Core Modules
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-post-create-modal-form-type',
  templateUrl: './schedule-post-create-modal-form-type.component.html',
  styleUrls: ['./schedule-post-create-modal-form-type.component.scss'],
})
export class SchedulePostCreateModalFormTypeComponent implements OnInit {
  formHeaderIcon = 'text_fields';
  formHeader = 'What do you want to share?';

  @Output() changedType = new EventEmitter<string>();

  eventCreateChooseTypeForm: FormGroup;

  constructor(private stepper: MatStepper, private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.eventCreateChooseTypeForm = this.buildPostCreateChooseTypeForm();
  }

  ngOnInit() {}

  private buildPostCreateChooseTypeForm(): FormGroup {
    return this.formBuilder.group({
      postType: new FormControl('', Validators.required),
    });
  }

  onRadioButtonValueChanged() {
    const { postType } = this.eventCreateChooseTypeForm.value;
    this.scheduleFacade.setPostType(postType);
  }

  onNextButtonClicked(): void {
    this.stepper.next();
  }

  onChooseTypeModalClosed(): void {
    this.scheduleFacade.setPostCreateModalObservable();
  }
}
