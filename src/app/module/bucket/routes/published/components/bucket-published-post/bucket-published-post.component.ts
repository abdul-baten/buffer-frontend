import { Component } from '@angular/core';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE, E_POST_STATUS, E_POST_TYPE } from '@core/enum';
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
      postImages: [
        {
          fileURL: 'https://c5.patreon.com/external/marketing/index_page/patreon-hero-illustration.png',
          fileType: 'img',
          fileMimeType: '',
          fileName: 'patreon-hero-illustration.png',
          fileThumbnailURL: '',
        },
        {
          fileURL:
            'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.0-9/84598866_3016061325091088_6248128808004616192_o.jpg?_nc_cat=111&_nc_ohc=tg2eA2wifwkAX9JsASz&_nc_ht=scontent.fdac7-1.fna&oh=903ae4000c7e6ba676a3615facff133c&oe=5EC93F8C',
          fileType: 'img',
          fileMimeType: '',
          fileName: 'patreon-hero-illustration.jpg',
          fileThumbnailURL: '',
        },
        {
          fileURL: 'https://c5.patreon.com/external/marketing/index_page/patreon-hero-illustration.png',
          fileType: 'img',
          fileMimeType: '',
          fileName: 'patreon-hero-illustration.png',
          fileThumbnailURL: '',
        },
        {
          fileURL:
            'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.0-9/84598866_3016061325091088_6248128808004616192_o.jpg?_nc_cat=111&_nc_ohc=tg2eA2wifwkAX9JsASz&_nc_ht=scontent.fdac7-1.fna&oh=903ae4000c7e6ba676a3615facff133c&oe=5EC93F8C',
          fileType: 'img',
          fileMimeType: '',
          fileName: 'patreon-hero-illustration.jpg',
          fileThumbnailURL: '',
        },
        {
          fileURL:
            'https://scontent.fdac7-1.fna.fbcdn.net/v/t1.0-9/84598866_3016061325091088_6248128808004616192_o.jpg?_nc_cat=111&_nc_ohc=tg2eA2wifwkAX9JsASz&_nc_ht=scontent.fdac7-1.fna&oh=903ae4000c7e6ba676a3615facff133c&oe=5EC93F8C',
          fileType: 'img',
          fileMimeType: '',
          fileName: 'patreon-hero-illustration.jpg',
          fileThumbnailURL: '',
        },
      ],
      socialAccounts: [
        {
          _id: '',
          connectionID: '',
          connectionName: 'Test Page for Iconosquare',
          connectionPicture:
            'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
          connectionStatus: E_CONNECTION_STATUS.ENABLED,
          connectionToken: '',
          connectionType: E_CONNECTION_TYPE.FACEBOOK_PAGE,
          connectionUserID: '',
        },
      ],
      postType: E_POST_TYPE.IMAGE,
      postStatus: E_POST_STATUS.SCHEDULED,
      postTime: '',
      postPermission: {
        postCanBeEdited: true,
        postCanNeDeleted: true,
      },
      postOriginalDate: '2020-01-07T20:30:00',
      postLocation: '',
      postLastEditedContent: '',
      postDate: '',
      postURL: '',
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      postCreateMember: '',
      postLastEditedDate: '',
      postLastEditedMember: '',
    },
  ]);
}
