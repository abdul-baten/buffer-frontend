import type { EPostStatus, EPostType } from '../enum';
import type { EventInput } from '@fullcalendar/core';
import type { IConnection } from './connection.model';
import type { IMedia } from './media.model';

export interface IPost extends EventInput {
  id: string;
  post_connection: Partial<IConnection>;
  post_date_time: string;
  post_media?: IMedia['id'][];
  post_message: string;
  post_status: EPostStatus;
  post_type: EPostType;
  post_user_id: string;
}
