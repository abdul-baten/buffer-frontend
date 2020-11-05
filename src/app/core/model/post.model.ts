import { EConnectionType, EPostStatus, EPostType } from '../enum';
import { EventInput } from '@fullcalendar/core';
import { IConnection } from './connection.model';
import { IMedia } from './media.model';
import { IUser } from './user.model';

export interface IPost extends EventInput {
  id: string;
  post_connection_id: IConnection['id'];
  post_connection_type: EConnectionType;
  post_date_time: Date;
  post_media: IMedia['media_uri'][];
  post_message: string;
  post_status: EPostStatus;
  post_type: EPostType;
  post_user_id: IUser['id'];
}
