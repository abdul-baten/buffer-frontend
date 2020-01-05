// Core Modules
import { Component } from '@angular/core';

// Enums
import { CALENDAR_VIEW } from 'src/app/module/schedule/enum/calendar-view-options.enum';

@Component({
  selector: 'buffer--schedule-month-calendar',
  templateUrl: './schedule-month-calendar.component.html',
  styleUrls: ['./schedule-month-calendar.component.scss']
})
export class ScheduleMonthCalendarComponent {
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  constructor() {}
}
