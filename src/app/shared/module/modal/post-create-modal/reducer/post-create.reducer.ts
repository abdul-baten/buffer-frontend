import { Action, createReducer, on } from '@ngrx/store';
import { I_POST } from '@core/model';
import { removeNewPostData, setNewPostData, setNewPostDate, setNewPostType } from '../action/post-create.action';

const postCreateFeatureKey = 'postCreateData';

const initialState: I_POST = {
  _id: null,
  postCaption: null,
  postConnection: [],
  postMedia: [],
  postScheduleDate: null,
  postScheduleTime: null,
  postStatus: null,
  postTime: null,
  postType: null,
  userID: null,
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
