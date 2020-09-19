import differenceInDays from 'date-fns/differenceInDays';
import { CALENDAR_POST_DATA } from '@app/schedule/data/calendar-post.data';
import { Component, Inject } from '@angular/core';
import { E_POST_TYPE } from '@core/enum';
import { I_POST } from '@core/model';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  upcomingPost: boolean;
  postType = E_POST_TYPE;

  constructor(private scheduleFacade: ScheduleFacade, @Inject(CALENDAR_POST_DATA) public calendarData: I_POST) {
    this.upcomingPost = differenceInDays(new Date(), this.calendarData.event.start) <= 0;
  }

  actionClicked(action: string): void {
    const { id } = this.calendarData.event;
    switch (action) {
      case 'view':
        this.scheduleFacade.handlePostDetailsDialogOpen(this.calendarData.event);
        break;

      case 'edit':
        this.scheduleFacade.handlePostEditDialogOpen(this.calendarData.event);
        break;

      case 'delete':
        this.scheduleFacade.deletePost(id);
        break;
    }
  }
}
