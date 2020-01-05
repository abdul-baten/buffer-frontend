// Core Modules
import { Component } from '@angular/core';

@Component({
  selector: 'buffer--schedule-calendar-settings-modal',
  templateUrl: './schedule-calendar-settings-modal.component.html',
  styleUrls: ['./schedule-calendar-settings-modal.component.scss']
})
export class ScheduleCalendarSettingsModalComponent {
  favoriteSeason = 'Monday';
  seasons: string[] = ['Sunday', 'Monday'];

  constructor() {}
}
