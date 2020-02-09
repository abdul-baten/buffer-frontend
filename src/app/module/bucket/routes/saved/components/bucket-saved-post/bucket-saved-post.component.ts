import { CalPostInterface } from '@core/model/post/post.model';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POST_STATUS } from '@core/enum/post/post-status.enum';
import { POST_TYPE } from '@core/enum/post/post-type.enum';

@Component({
  selector: 'buffer--bucket-saved-post',
  templateUrl: './bucket-saved-post.component.html',
  styleUrls: ['./bucket-saved-post.component.scss'],
})
export class BucketSavedPostComponent {
  calendarPosts: Observable<CalPostInterface[]> = of([
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
          socialId: '',
          socialAvatar:
            'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
          socialName: 'Facebook',
          socialType: '',
          socialURL: '',
        },
      ],
      postType: POST_TYPE.IMAGE,
      postStatus: POST_STATUS.SCHEDULED,
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
    {
      id: '1001',
      title:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      start: '2020-01-31T20:30:00',
      allDay: false,
      editable: true,
      overlap: true,
      hasEnd: false,
      postVideos: [
        {
          fileURL: 'https://www.videvo.net/videvo_files/converted/2017_12/preview/171124_B2_UHD_001.mp471291.webm',
          fileType: 'video',
          fileMimeType: '',
          fileName: 'patreon-hero-illustration.png',
          fileThumbnailURL: '',
        },
      ],
      socialAccounts: [
        {
          socialId: '',
          socialAvatar:
            'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
          socialName: 'Facebook',
          socialType: '',
          socialURL: '',
        },
      ],
      postType: POST_TYPE.VIDEO,
      postStatus: POST_STATUS.SCHEDULED,
      postTime: '',
      postPermission: {
        postCanBeEdited: true,
        postCanNeDeleted: true,
      },
      postOriginalDate: '2020-01-31T20:30:00',
      postLocation: '',
      postLastEditedContent: '',
      postDate: '',
      postURL: '',
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      postCreateMember: '',
      postLastEditedDate: '',
      postLastEditedMember: '',
    },
    {
      id: '1001',
      title:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      start: '2020-01-31T20:30:00',
      allDay: false,
      editable: true,
      overlap: true,
      hasEnd: false,
      socialAccounts: [
        {
          socialId: '',
          socialAvatar:
            'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
          socialName: 'Facebook',
          socialType: '',
          socialURL: '',
        },
      ],
      postType: POST_TYPE.TEXT,
      postStatus: POST_STATUS.SCHEDULED,
      postTime: '',
      postPermission: {
        postCanBeEdited: true,
        postCanNeDeleted: true,
      },
      postOriginalDate: '2020-01-31T20:30:00',
      postLocation: '',
      postLastEditedContent: '',
      postDate: '',
      postURL: '',
      postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      postCreateMember: '',
      postLastEditedDate: '',
      postLastEditedMember: '',
    },
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
          socialId: '',
          socialAvatar:
            'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
          socialName: 'Facebook',
          socialType: '',
          socialURL: '',
        },
      ],
      postType: POST_TYPE.IMAGE,
      postStatus: POST_STATUS.SCHEDULED,
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
    {
      id: '1001',
      title:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      start: '2020-01-31T20:30:00',
      allDay: false,
      editable: true,
      overlap: true,
      hasEnd: false,
      postVideos: [
        {
          fileURL: 'https://www.videvo.net/videvo_files/converted/2017_12/preview/171124_B2_UHD_001.mp471291.webm',
          fileType: 'video',
          fileMimeType: '',
          fileName: 'patreon-hero-illustration.png',
          fileThumbnailURL: '',
        },
      ],
      socialAccounts: [
        {
          socialId: '',
          socialAvatar:
            'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
          socialName: 'Facebook',
          socialType: '',
          socialURL: '',
        },
      ],
      postType: POST_TYPE.VIDEO,
      postStatus: POST_STATUS.SCHEDULED,
      postTime: '',
      postPermission: {
        postCanBeEdited: true,
        postCanNeDeleted: true,
      },
      postOriginalDate: '2020-01-31T20:30:00',
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
