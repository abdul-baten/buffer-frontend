import { EPostStatus, EPostType } from '../enum';
import { EventInput } from '@fullcalendar/core';
import { IConnection } from './connection.model';
import { IMedia } from './media.model';

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
