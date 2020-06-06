import { Component } from '@angular/core';
import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { I_POST } from '@core/model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'buffer--bucket-scheduled-post',
  templateUrl: './bucket-scheduled-post.component.html',
  styleUrls: ['./bucket-scheduled-post.component.scss'],
})
export class BucketScheduledPostComponent {
  calendarPosts: Observable<I_POST[]> = of([
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-01-07T20:30:00',
      allDay: false,
      editable: true,
      overlap: true,
      hasEnd: false,
      postMedia: [
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL: '',
        },
      ],
      postConnection: '',
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleTime: '',
      postScheduleDate: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
  ]);

  trackByFn(index: number): string | number {
    return index;
  }
}
