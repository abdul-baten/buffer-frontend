// Core Modules
import { Component, Input } from '@angular/core';

// Third Party Modules

@Component({
  selector: 'buffer--schedule-post-view-modal-images',
  templateUrl: './schedule-post-view-modal-images.component.html',
  styleUrls: ['./schedule-post-view-modal-images.component.scss']
})
export class SchedulePostViewModalImagesComponent {
  @Input() eventImages: string[] = [];
}
