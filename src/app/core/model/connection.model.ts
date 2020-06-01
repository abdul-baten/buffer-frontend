import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from '@core/enum';
import { I_USER } from './user.model';

// tslint:disable-next-line
export interface I_CONNECTION {
  id: string;
  connectionAdded?: Date;
  connectionCategory?: string;
  connectionID: string;
  connectionName: string;
  connectionPicture: string;
  connectionStatus: E_CONNECTION_STATUS;
  connectionToken: string;
  connectionType: E_CONNECTION_TYPE;
  connectionUserID: string;
}

// tslint:disable-next-line
export interface I_FB_PAGE_RESPONSE {
  user: I_USER;
  pages: I_CONNECTION[];
}
