import { Action, createReducer, on } from '@ngrx/store';
import { E_POST_STATUS } from '@core/enum';
import { I_POST } from '@core/model';
import { removeNewPostData, setNewPostData, setNewPostDate, setNewPostType } from '../action/post-create.action';

const postCreateFeatureKey = 'postCreateData';

const initialState: I_POST = {
  postCreateMember: '',
  postDate: null,
  postLastEditedDate: null,
  postLastEditedMember: '',
  postStatus: E_POST_STATUS.SCHEDULED,
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
      _id: null,
      connectionID: null,
      connectionName: null,
      connectionPicture: null,
      connectionStatus: null,
      connectionToken: null,
      connectionType: null,
      connectionUserID: null,
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

function reducer(state: I_POST | undefined, action: Action) {
  return postCreateDataReducer(state, action);
}

export { postCreateFeatureKey, reducer };
