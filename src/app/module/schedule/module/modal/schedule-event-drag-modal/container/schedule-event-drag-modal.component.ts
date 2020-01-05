// Core Module
import { Component, Inject } from '@angular/core';

// Third Party Module
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';

@Component({
  selector: 'buffer--schedule-event-drag-modal',
  templateUrl: './schedule-event-drag-modal.component.html',
  styleUrls: ['./schedule-event-drag-modal.component.scss']
})
export class ScheduleEventDragModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CalPostInfoInterface,
    private matDialogRef: MatDialogRef<ScheduleEventDragModalComponent>
  ) {
    console.warn('============= console.warn starts =============');
    console.warn('data', this.data);
    console.warn('============= console.warn ends =============');
  }

  onDragModalClosed(): void {
    this.matDialogRef.close();
    this.matDialogRef.afterClosed().subscribe(_ => this.data.revert());
  }
}
