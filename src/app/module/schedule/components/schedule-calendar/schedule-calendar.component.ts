// Core Modules
import { Component } from '@angular/core';

// Enums
import { CALENDAR_VIEW } from 'src/app/module/schedule/enum/calendar-view-options.enum';

@Component({
  selector: 'buffer--schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss']
})
export class ScheduleCalendarComponent {
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  constructor() {}
}
