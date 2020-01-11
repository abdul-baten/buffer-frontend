// Core Modules
import { Component, Inject } from '@angular/core';

// Third Party Modules
import differenceInDays from 'date-fns/differenceInDays';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

// Data
import { CALENDAR_POST_DATA } from '@app/schedule/data/calendar-post.data';

@Component({
  selector: 'buffer--schedule-calendar-post',
  templateUrl: './schedule-calendar-post.component.html',
  styleUrls: ['./schedule-calendar-post.component.scss']
})
export class ScheduleCalendarViewPostComponent {
  upcomingPost: boolean;

  constructor(
    private scheduleFacade: ScheduleFacade,
    @Inject(CALENDAR_POST_DATA) public calendarData: CalPostInfoInterface
  ) {
    this.upcomingPost = differenceInDays(new Date(), this.calendarData.event.start) <= 0;
  }

  onPostDeleteBtnClicked(): void {
    this.scheduleFacade.openPostDeleteDialog(this.calendarData.event.id);
  }
}
