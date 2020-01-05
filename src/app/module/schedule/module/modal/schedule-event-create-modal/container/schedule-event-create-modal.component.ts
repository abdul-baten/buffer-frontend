// Core Modules
import { Component } from '@angular/core';

// Third Party Modules
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--schedule-event-create-modal',
  templateUrl: './schedule-event-create-modal.component.html',
  styleUrls: ['./schedule-event-create-modal.component.scss']
})
export class ScheduleEventCreateModalComponent {
  constructor(private eventCreateModalRef: MatDialogRef<ScheduleEventCreateModalComponent>) {}

  onChooseTypeModalClosed(): void {
    this.eventCreateModalRef.close();
  }
}
