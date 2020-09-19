import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { E_CONNECTION_TYPE, E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { I_POST } from '@core/model';
import { Observable, of } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published',
  styleUrls: ['./bucket-published.component.scss'],
  templateUrl: './bucket-published.component.html',
})
export class BucketPublishedComponent {
  @ViewChild('postTable', { static: true }) postTable: Table;

  postType = E_POST_TYPE;

  calendarPosts: Observable<I_POST[]> = of([
    {
      id: '100',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-07T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {
        connectionType: E_CONNECTION_TYPE.TWITTER,
      },
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-08T20:30:00',
      allDay: false,
      editable: true,
      overlap: true,
      hasEnd: false,
      postMedia: [
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'video',
          mediaURL: 'https://static.videezy.com/system/resources/previews/000/000/174/original/Small%20waterfall%20[SaveYouTube.com].mp4',
        },
      ],
      postConnection: {},
      postType: E_POST_TYPE.VIDEO,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-07T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {
        connectionType: E_CONNECTION_TYPE.FACEBOOK_PAGE,
      },
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-08T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {},
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-07T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {},
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-08T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {},
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-07T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {},
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-08T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {},
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-07T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {},
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
    {
      id: '100',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      start: '2020-08-08T20:30:00',
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
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: '',
          mediaMimeType: '',
          mediaName: 'patreon-hero-illustration.png',
          mediaType: 'img',
          mediaURL:
            'https://images.unsplash.com/photo-1598328514034-58f20ba7d2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      postConnection: {},
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postScheduleDateTime: new Date().toDateString(),
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      userID: '',
    },
  ]);

  splitConnectionType(typeName: E_CONNECTION_TYPE | E_POST_TYPE): string {
    return typeName.split('_').join(' ');
  }

  inputChanged(inputString: string): void {
    this.postTable.filterGlobal(inputString, 'contains');
  }

  dropdownChanged(data: { dataText: string; propertyName: string; comparison: string }): void {
    const { dataText, propertyName, comparison } = data;
    this.postTable.filter(dataText, propertyName, comparison);
  }
}
