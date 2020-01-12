// Core Module
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Third Party Module
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Facade
// import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-post-reschedule-modal',
  templateUrl: './schedule-post-reschedule-modal.component.html',
  styleUrls: ['./schedule-post-reschedule-modal.component.scss'],
})
export class SchedulePostRescheduleModalComponent {
  postRescheduleForm: FormGroup;
  currentDateTime = roundToNearestMinutes(new Date(), { nearestTo: 15 });

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { postId: string; postDate: Date },
    private matDialogRef: MatDialogRef<SchedulePostRescheduleModalComponent>,
  ) {
    this.postRescheduleForm = this.buildPostRescheduleForm();
  }

  private buildPostRescheduleForm(): FormGroup {
    return this.formBuilder.group({
      postDate: [roundToNearestMinutes(this.data.postDate, { nearestTo: 15 }), Validators.required],
    });
  }

  onRescheduleModalClosed(): void {
    this.matDialogRef.close();
  }
}
