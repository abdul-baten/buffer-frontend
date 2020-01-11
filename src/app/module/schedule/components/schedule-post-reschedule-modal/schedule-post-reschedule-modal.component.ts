// Core Module
import { Component, Inject } from '@angular/core';

// Third Party Module
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';

@Component({
  selector: 'buffer--schedule-post-reschedule-modal',
  templateUrl: './schedule-post-reschedule-modal.component.html',
  styleUrls: ['./schedule-post-reschedule-modal.component.scss']
})
export class SchedulePostRescheduleModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CalPostInfoInterface,
    private matDialogRef: MatDialogRef<SchedulePostRescheduleModalComponent>
  ) {}

  onRescheduleModalClosed(): void {
    this.matDialogRef.close();
    this.matDialogRef.afterClosed().subscribe(_ => this.data.revert());
  }
}
