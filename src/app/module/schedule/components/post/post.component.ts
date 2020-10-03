import differenceInDays from 'date-fns/differenceInDays';
import { CALENDAR_POST_DATA } from '../../data/calendar-post.data';
import { Component, Inject } from '@angular/core';
import { E_POST_TYPE } from 'src/app/core/enum';
import { I_POST } from 'src/app/core/model';
import { MenuItem } from 'primeng/api';
import { ScheduleFacade } from '../../facade/schedule.facade';

@Component({
  selector: 'buffer--post',
  styleUrls: ['./post.component.css'],
  templateUrl: './post.component.html',
})
export class PostComponent {
  menuItems: MenuItem[];
  postType = E_POST_TYPE;
  upcomingPost: boolean;

  constructor(private readonly facade: ScheduleFacade, @Inject(CALENDAR_POST_DATA) public calendarData: I_POST) {
    this.upcomingPost = differenceInDays(new Date(), this.calendarData.event.start) <= 0;

    this.menuItems = [
      {
        label: 'Details',
        icon: 'pi pi-eye',
        command: () => {
          const { extendedProps } = this.calendarData.event;
          this.facade.viewPost(extendedProps);
        },
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => {
          const { extendedProps } = this.calendarData.event;
          this.facade.editPost(extendedProps);
        },
      },
      { separator: true },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
          this.facade.deletePost(this.calendarData.event.id);
        },
      },
    ];
  }

  trackBy(index: number, _media: string): number {
    return index;
  }
}
