// Core Modules
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-create-modal-form-type',
  templateUrl: './post-create-modal-form-type.component.html',
  styleUrls: ['./post-create-modal-form-type.component.scss'],
})
export class PostCreateModalFormTypeComponent {
  formHeaderIcon = 'text_fields';
  formHeader = 'What do you want to share?';

  @Output() changedType = new EventEmitter<string>();

  eventCreateChooseTypeForm: FormGroup;

  constructor(
    private stepper: MatStepper,
    private formBuilder: FormBuilder,
    private scheduleFacade: ScheduleFacade,
    private dialogRef: MatDialogRef<PostCreateModalFormTypeComponent>,
  ) {
    this.eventCreateChooseTypeForm = this.buildPostCreateChooseTypeForm();
  }

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

  handleCreateModalCloseBtnClick(): void {
    this.dialogRef.close();
    this.scheduleFacade.setPostCreateModalObservable();
  }
}
