// Core Modules
import { Component } from '@angular/core';

@Component({
  selector: 'buffer--schedule-calendar-date-selection',
  templateUrl: './schedule-calendar-date-selection.component.html',
  styleUrls: ['./schedule-calendar-date-selection.component.scss']
})
export class ScheduleCalendarDateSelectionComponent {
  viewDate: Date = new Date();

  constructor() {}

  onSelect(event: any) {
    console.log(event);
    this.viewDate = event;
  }
}
