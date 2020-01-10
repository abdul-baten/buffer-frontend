// Core Modules
import { Component, Input } from '@angular/core';

// Third Party Modules

@Component({
  selector: 'buffer--schedule-event-view-modal-time',
  templateUrl: './schedule-event-view-modal-time.component.html',
  styleUrls: ['./schedule-event-view-modal-time.component.scss']
})
export class ScheduleEventViewModalTimeComponent {
  @Input() eventDateAndTime: Date;
  constructor() {}
}
