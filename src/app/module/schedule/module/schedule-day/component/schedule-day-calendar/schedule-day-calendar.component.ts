// Core Module
import { Component } from '@angular/core';

// Enums
import { CALENDAR_VIEW } from 'src/app/module/schedule/enum/calendar-view-options.enum';

@Component({
  selector: 'buffer--schedule-day-calendar',
  templateUrl: './schedule-day-calendar.component.html',
  styleUrls: ['./schedule-day-calendar.component.scss']
})
export class ScheduleDayCalendarComponent {
  calendarView = CALENDAR_VIEW.TIME_GRID_DAY;

  constructor() {}
}
