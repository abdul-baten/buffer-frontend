import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';
import { Component, Inject } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-reschedule-modal',
  templateUrl: './post-reschedule-modal.component.html',
  styleUrls: ['./post-reschedule-modal.component.scss'],
})
export class PostRescheduleModalComponent {
  postRescheduleForm: FormGroup;
  currentDateTime = roundToNearestMinutes(new Date(), { nearestTo: 15 });

  errorStateMatcher = new CustomFormErrorStateMatcher();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { postId: string; postDate: Date },
    private dialogRef: MatDialogRef<PostRescheduleModalComponent>,
    private formBuilder: FormBuilder,
  ) {
    this.postRescheduleForm = this.buildPostRescheduleForm();
  }

  private buildPostRescheduleForm(): FormGroup {
    return this.formBuilder.group({
      postDate: [roundToNearestMinutes(this.data.postDate, { nearestTo: 15 }), Validators.required],
    });
  }

  handleRescheduleCancelBtnClick(): void {
    this.dialogRef.close();
  }

  handleRescheduleBtnClick(): void {
    this.dialogRef.close();
  }
}
