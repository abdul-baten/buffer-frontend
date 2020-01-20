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
  styleUrls: ['./schedule-calendar-post.component.scss'],
})
export class ScheduleCalendarViewPostComponent {
  upcomingPost: boolean;

  constructor(
    private scheduleFacade: ScheduleFacade,
    @Inject(CALENDAR_POST_DATA) public calendarData: CalPostInfoInterface,
  ) {
    this.upcomingPost = differenceInDays(new Date(), this.calendarData.event.start) <= 0;
  }

  onPostActionBtnClicked(action: string): void {
    const { id, start } = this.calendarData.event;
    switch (action) {
      case 'view':
        this.scheduleFacade.openPostDeleteDialog(id);
        break;

      case 'edit':
        this.scheduleFacade.openPostDeleteDialog(id);
        break;

      case 'reschedule':
        this.scheduleFacade.openPostRescheduleDialog(id, start);
        break;

      case 'delete':
        this.scheduleFacade.openPostDeleteDialog(id);
        break;
    }
  }
}
