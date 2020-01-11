// Core Modules
import { Component, Input } from '@angular/core';

// Third Party Modules

@Component({
  selector: 'buffer--schedule-post-view-modal-videos',
  templateUrl: './schedule-post-view-modal-videos.component.html',
  styleUrls: ['./schedule-post-view-modal-videos.component.scss']
})
export class SchedulePostViewModalVideosComponent {
  @Input() eventVideos: string[] = [];
}
