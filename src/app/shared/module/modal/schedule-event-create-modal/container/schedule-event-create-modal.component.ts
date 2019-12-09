// Core Modules
import { Component, Inject } from '@angular/core';

// Third Party Modules
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'buffer--schedule-event-create-modal',
  templateUrl: './schedule-event-create-modal.component.html',
  styleUrls: ['./schedule-event-create-modal.component.scss']
})
export class ScheduleEventCreateModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Date) {}
}
