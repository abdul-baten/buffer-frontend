// Models
import { EventInput } from '@fullcalendar/core';

// Enums
import { POST_TYPE } from '../enum/schedule-post-create-modal.enum';

export interface PostScheduleState {
  postDate: string;
  postTime: string;
  postNow: boolean;
  postLink?: string;
  postAuto: boolean;
  postDraft: boolean;
  postType: POST_TYPE;
  postCaption: string;
  postLocation?: string;
  postImages?: string[];
  postVideos?: string[];
  postOriginalDate: string;
}

export interface CalPostFileInterface {
  fileURL: string;
  fileType: string;
}

export interface CalPostInterface extends EventInput {
  socialAccounts: string[];
  imageUrls?: CalPostFileInterface[];
  videoUrls?: CalPostFileInterface[];
  postType: 'text' | 'image' | 'video';
}
