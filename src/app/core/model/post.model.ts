import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { EventInput } from '@fullcalendar/core';

// tslint:disable-next-line
export interface I_POST_FILE {
  id: string;
  fileMimeType: string;
  fileName: string;
  fileType: string;
  fileURL: string;
}

// tslint:disable-next-line
export interface I_POST extends EventInput {
  id: string;
  postCaption: string;
  postConnection: string[];
  postMedia?: I_POST_FILE[];
  postScheduleDate: string;
  postScheduleTime: string;
  postStatus: E_POST_STATUS;
  postType: E_POST_TYPE;
  userID: string;
}

// tslint:disable-next-line
export interface I_NEW_POST_MODAL_DATA {
  activeConnectionID: string;
  postScheduledDate: string;
}
