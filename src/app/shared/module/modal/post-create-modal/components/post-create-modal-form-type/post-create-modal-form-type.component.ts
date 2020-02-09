import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';

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
    private postCreateModalFacade: PostCreateModalFacade,
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
    this.postCreateModalFacade.setPostType(postType);
  }

  onNextButtonClicked(): void {
    this.stepper.next();
  }

  handleCreateModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
