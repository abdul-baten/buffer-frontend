import { EventInput } from '@fullcalendar/core';
import { E_POST_TYPE, E_POST_STATUS } from '@core/enum';
import { I_CONNECTION } from './social-profile.model';

// tslint:disable-next-line
export interface I_POST_FILE {
  fileURL: string;
  fileType: string;
  fileName: string;
  fileMimeType: string;
  fileThumbnailURL: string;
}

// tslint:disable-next-line
export interface I_POST extends EventInput {
  postURL: string;
  postDate: string;
  postTime: string;
  postLink?: string;
  postType: E_POST_TYPE;
  postCaption: string;
  postLocation?: string;
  postStatus: E_POST_STATUS;
  postOriginalDate: string;
  postImages?: I_POST_FILE[];
  postVideos?: I_POST_FILE[];
  socialAccounts: I_CONNECTION[];
}
