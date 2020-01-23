import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component } from '@angular/core';

@Component({
  selector: 'buffer--schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;
}
