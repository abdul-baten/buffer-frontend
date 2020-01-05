// Enums
import { POST_TYPE } from '../enum/schedule-event-create-modal.enum';

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

import { EventInput } from '@fullcalendar/core';

export interface CalPostFileInterface {
  fileURL: string;
  fileType: string;
}

export interface CalPostInterface extends EventInput {
  imageUrls?: CalPostFileInterface[];
  videoUrls?: CalPostFileInterface[];
  socialAccounts: string[];
}
