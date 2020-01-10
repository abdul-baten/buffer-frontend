// Core Modules
import { Component, Input } from '@angular/core';

// Third Party Modules

@Component({
  selector: 'buffer--schedule-event-view-modal-videos',
  templateUrl: './schedule-event-view-modal-videos.component.html',
  styleUrls: ['./schedule-event-view-modal-videos.component.scss']
})
export class ScheduleEventViewModalVideosComponent {
  @Input() eventVideos: string[] = [];

  constructor() {}
}
