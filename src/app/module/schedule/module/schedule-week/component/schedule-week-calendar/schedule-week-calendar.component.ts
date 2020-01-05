// Core Modules
import { Component } from '@angular/core';

// Enums
import { CALENDAR_VIEW } from 'src/app/module/schedule/enum/calendar-view-options.enum';

@Component({
  selector: 'buffer--schedule-week-calendar',
  templateUrl: './schedule-week-calendar.component.html',
  styleUrls: ['./schedule-week-calendar.component.scss']
})
export class ScheduleWeekCalendarComponent {
  calendarView = CALENDAR_VIEW.TIME_GRID_WEEK;

  constructor() {}
}
