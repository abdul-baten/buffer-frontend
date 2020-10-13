import differenceInDays from 'date-fns/differenceInDays';
import { CalendarPostData } from '../../data/calendar-post.data';
import { Component, Inject } from '@angular/core';
import { EPostType } from 'src/app/core/enum';
import type { IPost } from 'src/app/core/model';
import type { MenuItem } from 'primeng/api';
import type { ScheduleFacade } from '../../facade/schedule.facade';

@Component({
  selector: 'buffer-post',
  styleUrls: ['./post.component.css'],
  templateUrl: './post.component.html'
})
export class PostComponent {
  menu_items: MenuItem[];
  post_type = EPostType;
  upcoming_post: boolean;

  constructor (private readonly facade: ScheduleFacade, @Inject(CalendarPostData) public calendarData: IPost) {
    this.upcoming_post = differenceInDays(new Date(), this.calendarData.event.start) <= 0;

    this.menu_items = [
      {
        command: () => {
          const { extendedProps: extended_props } = this.calendarData.event;

          this.facade.viewPost(extended_props);
        },
        icon: 'pi pi-eye',
        label: 'Details'
      },
      {
        command: () => {
          const { extendedProps: extended_props } = this.calendarData.event;

          this.facade.editPost(extended_props);
        },
        icon: 'pi pi-pencil',
        label: 'Edit'
      },
      { separator: true },
      {
        command: () => {
          this.facade.deletePost(this.calendarData.event.id);
        },
        icon: 'pi pi-trash',
        label: 'Delete'
      }
    ];
  }

  public trackBy (index: number): number {
    return index;
  }
}
