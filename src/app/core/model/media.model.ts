import { IUser } from './user.model';

export interface IMedia {
  id: string;
  media_mime_type: string;
  media_name: string;
  media_size: string;
  media_type: string;
  media_uri: string;
  media_user_id: IUser['id'];
}
