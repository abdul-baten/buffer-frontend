import { createReducer, on, Action } from '@ngrx/store';
import { fromScheduleActions } from '@app/schedule/action';

// Model
import { CalPostInterface } from '@app/schedule/model/schedule.model';
import { POST_STATUS } from '../enum/schedule-post-create-modal.enum';

export const initialState: CalPostInterface = {
  postCreateMember: '',
  postDate: null,
  postLastEditedDate: null,
  postLastEditedMember: '',
  postStatus: POST_STATUS.SCHEDULED,
  postTime: null,
  postType: null,
  postURL: null,
  postPermission: {
    postCanBeEdited: true,
    postCanNeDeleted: true,
  },
  postLastEditedContent: '',
  socialAccounts: [
    {
      socialId: '',
      socialURL: '',
      socialType: '',
      socialName: '',
      socialAvatar: '',
    },
  ],
  postCaption: null,
  postDraft: false,
  postImages: null,
  postLocation: null,
  postOriginalDate: null,
  postVideos: null,
};

export const postDataReducer = createReducer(
  initialState,
  on(fromScheduleActions.setPostDate, (state, action) => {
    return {
      ...state,
      postOriginalDate: action.postOriginalDate,
    };
  }),
  on(fromScheduleActions.setPostType, (state, action) => {
    return {
      ...state,
      postType: action.postType,
      postOriginalDate: state.postOriginalDate,
    };
  }),
  on(fromScheduleActions.setPostData, (state, action) => {
    return {
      ...state,
      ...action.postData,
    };
  }),
  on(fromScheduleActions.removePostData, _ => initialState)
);

export function reducer(state: CalPostInterface | undefined, action: Action) {
  return postDataReducer(state, action);
}
