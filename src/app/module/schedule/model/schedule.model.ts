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
