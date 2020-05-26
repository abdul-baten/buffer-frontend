import differenceInDays from 'date-fns/differenceInDays';
import { CALENDAR_POST_DATA } from '@app/schedule/data/calendar-post.data';
import { Component, Inject } from '@angular/core';
import { I_POST } from '@core/model';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-calendar-post',
  templateUrl: './schedule-calendar-post.component.html',
  styleUrls: ['./schedule-calendar-post.component.scss'],
})
export class ScheduleCalendarViewPostComponent {
  upcomingPost: boolean;

  constructor(private scheduleFacade: ScheduleFacade, @Inject(CALENDAR_POST_DATA) public calendarData: I_POST) {
    this.upcomingPost = differenceInDays(new Date(), this.calendarData.event.start) <= 0;
  }

  onPostActionBtnClicked(action: string): void {
    const { id, start } = this.calendarData.event;
    switch (action) {
      case 'view':
        this.scheduleFacade.handlePostDetailsDialogOpen(this.calendarData.event);
        break;

      case 'edit':
        this.scheduleFacade.handlePostEditDialogOpen(this.calendarData.event);
        break;

      case 'reschedule':
        this.scheduleFacade.handlePostRescheduleDialogOpen(id, start);
        break;

      case 'delete':
        this.scheduleFacade.handlePostDeleteDialogOpen(id);
        break;
    }
  }
}
