import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { EventInput } from '@fullcalendar/core';
import { I_CONNECTION } from './social-profile.model';

// tslint:disable-next-line
export interface I_POST_FILE {
  _id: string;
  fileMimeType: string;
  fileName: string;
  fileType: string;
  fileURL: string;
}

// tslint:disable-next-line
export interface I_POST extends EventInput {
  _id: string;
  postCaption: string;
  postConnection: I_CONNECTION[];
  postMedia?: I_POST_FILE[];
  postScheduleDate: Date;
  postScheduleTime: string;
  postStatus: E_POST_STATUS;
  postType: E_POST_TYPE;
  userID: string;
}
