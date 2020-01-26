import { CalPostInterface } from '@app/schedule/model/schedule.model';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--schedule-post-reschedule-confirm-modal',
  templateUrl: './schedule-post-reschedule-confirm-modal.component.html',
  styleUrls: ['./schedule-post-reschedule-confirm-modal.component.scss'],
})
export class SchedulePostRescheduleConfirmModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public postInfo: CalPostInterface,
    private matDialogRef: MatDialogRef<SchedulePostRescheduleConfirmModalComponent>
  ) {}

  onRescheduleModalClosed(): void {
    this.matDialogRef.close();
    this.matDialogRef.afterClosed().subscribe(_ => this.postInfo.revert());
  }
}
