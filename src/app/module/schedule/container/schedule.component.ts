// Core MOdules
import { Component, OnInit } from '@angular/core';

// Enums
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';

@Component({
  selector: 'buffer--schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  constructor() {}

  ngOnInit() {}
}
