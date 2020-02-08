import { Action, createReducer, on } from '@ngrx/store';
import { CalPostInterface } from '@core/model/post/post.model';
import { POST_STATUS } from '@core/enum/post/post-status.enum';
import { removeNewPostData, setNewPostData, setNewPostDate, setNewPostType } from '../action/post-create.action';

const postCreateFeatureKey = 'postCreateData';

const initialState: CalPostInterface = {
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

const postCreateDataReducer = createReducer(
  initialState,
  on(setNewPostDate, (state, action) => {
    return {
      ...state,
      postOriginalDate: action.postOriginalDate,
    };
  }),
  on(setNewPostType, (state, action) => {
    return {
      ...state,
      postType: action.postType,
      postOriginalDate: state.postOriginalDate,
    };
  }),
  on(setNewPostData, (state, action) => {
    return {
      ...state,
      ...action.postData,
    };
  }),
  on(removeNewPostData, _ => initialState),
);

function reducer(state: CalPostInterface | undefined, action: Action) {
  return postCreateDataReducer(state, action);
}

export { postCreateFeatureKey, reducer };
