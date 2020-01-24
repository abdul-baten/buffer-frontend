// Models
import { EventInput } from '@fullcalendar/core';

// Enums
import { POST_TYPE } from '@app/schedule/enum/schedule-post-create-modal.enum';

interface ScheduleState {
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

interface CalPostFileInterface {
  fileURL: string;
  fileType: string;
}

interface CalPostInterface extends EventInput {
  socialAccounts: string[];
  imageUrls?: CalPostFileInterface[];
  videoUrls?: CalPostFileInterface[];
  postType: 'text' | 'image' | 'video';
}

export { ScheduleState, CalPostFileInterface, CalPostInterface };
