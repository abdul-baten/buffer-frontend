// Core Modules
import { Component, Inject } from '@angular/core';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';

import { CALENDAR_POST_DATA } from '../../container/schedule-calendar-view.component';

@Component({
  selector: 'buffer--schedule-calendar-view-event',
  templateUrl: './schedule-calendar-view-event.component.html',
  styleUrls: ['./schedule-calendar-view-event.component.scss']
})
export class ScheduleCalendarViewEventComponent {
  constructor(@Inject(CALENDAR_POST_DATA) public calendarData: CalPostInfoInterface) {}
}
