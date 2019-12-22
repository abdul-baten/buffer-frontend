// Core Modules
import { Component, Input } from '@angular/core';

// Third Party Modules

@Component({
  selector: 'buffer--schedule-event-view-modal-images',
  templateUrl: './schedule-event-view-modal-images.component.html',
  styleUrls: ['./schedule-event-view-modal-images.component.scss']
})
export class ScheduleEventViewModalImagesComponent {
  @Input() eventImages: string[] = [];

  constructor() {}
}
