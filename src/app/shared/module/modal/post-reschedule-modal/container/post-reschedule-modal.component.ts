// Core Module
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Third Party Module
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Facade
// import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--post-reschedule-modal',
  templateUrl: './post-reschedule-modal.component.html',
  styleUrls: ['./post-reschedule-modal.component.scss'],
})
export class PostRescheduleModalComponent {
  postRescheduleForm: FormGroup;
  currentDateTime = roundToNearestMinutes(new Date(), { nearestTo: 15 });

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { postId: string; postDate: Date },
    private dialogRef: MatDialogRef<PostRescheduleModalComponent>,
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
