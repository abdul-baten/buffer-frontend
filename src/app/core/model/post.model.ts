import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { EventInput } from '@fullcalendar/core';
import { I_MEDIA } from './media.model';

// tslint:disable-next-line
export interface I_POST extends EventInput {
  id: string;
  postCaption: string;
  postConnection: string;
  postMedia?: I_MEDIA[];
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
