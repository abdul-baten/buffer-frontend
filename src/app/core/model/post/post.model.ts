// Models
import { EventInput } from '@fullcalendar/core';
import { POST_TYPE } from '@core/enum/post/post-type.enum';
import { POST_STATUS } from '@core/enum/post/post-status.enum';

interface PostFileInterface {
  fileURL: string;
  fileType: string;
  fileName: string;
  fileMimeType: string;
  fileThumbnailURL: string;
}

interface PostPermissionInterface {
  postCanBeEdited: boolean;
  postCanNeDeleted: boolean;
}

interface SocialProfileInterface {
  socialId: string;
  socialURL: string;
  socialType: string;
  socialName: string;
  socialAvatar: string;
}

interface CalPostInterface extends EventInput {
  postURL: string;
  postDate: string;
  postTime: string;
  postLink?: string;
  postType: POST_TYPE;
  postCaption: string;
  postLocation?: string;
  postStatus: POST_STATUS;
  postOriginalDate: string;
  postCreateMember: string;
  postLastEditedContent: {};
  postLastEditedDate: string;
  postLastEditedMember: string;
  postImages?: PostFileInterface[];
  postVideos?: PostFileInterface[];
  postPermission: PostPermissionInterface;
  socialAccounts: SocialProfileInterface[];
}

export { CalPostInterface, PostFileInterface, SocialProfileInterface };
