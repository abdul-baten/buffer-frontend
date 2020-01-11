// Core Modules
import { Component, Input } from '@angular/core';

@Component({
  selector: 'buffer--schedule-post-view-modal-time',
  templateUrl: './schedule-post-view-modal-time.component.html',
  styleUrls: ['./schedule-post-view-modal-time.component.scss']
})
export class SchedulePostViewModalTimeComponent {
  @Input() eventDateAndTime: Date;
}
