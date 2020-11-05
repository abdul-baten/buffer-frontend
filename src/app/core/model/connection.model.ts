import { EConnectionStatus, EConnectionType } from '../enum';
import { IUser } from './user.model';

export interface IConnection {
  connection_added: string;
  connection_category: string;
  connection_id: string;
  connection_name: string;
  connection_picture: string;
  connection_status: EConnectionStatus;
  connection_token: string;
  connection_type: EConnectionType;
  connection_updated: string;
  connection_user_id: IUser['id'];
  id: string;
}

export interface IConnectionSelected {
  id: string;
  type?: string;
}

export interface IRedirectResponse {
  redirect_uri: string;
}

export interface IConnectionAvailable {
  image: string,
  name: string,
  type: EConnectionType
}
