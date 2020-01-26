// Models
import { EventInput } from '@fullcalendar/core';

// Enums
import { POST_TYPE, POST_STATUS } from '@app/schedule/enum/schedule-post-create-modal.enum';

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
