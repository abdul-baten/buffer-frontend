import { Component } from '@angular/core';
import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { I_POST } from '@core/model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'buffer--bucket-published-post',
  templateUrl: './bucket-published-post.component.html',
  styleUrls: ['./bucket-published-post.component.scss'],
})
export class BucketPublishedPostComponent {
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
          fileMimeType: '',
          fileName: 'patreon-hero-illustration.png',
          fileType: 'img',
          fileURL: '',
        },
      ],
      postConnection: [],
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleTime: '',
      postScheduleDate: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
  ]);
}
