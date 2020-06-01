import { Action, createReducer, on } from '@ngrx/store';
import { I_POST } from '@core/model';
import {
  setNewPostConnections,
  setNewPostData,
  setNewPostDate,
  setNewPostType,
  setNewPostConnectionID,
} from '../actions';

const newPostFeatureKey = 'newPost';

const initialState: I_POST = {
  id: null,
  postCaption: null,
  postConnection: [],
  postMedia: [],
  postScheduleDate: null,
  postScheduleTime: null,
  postStatus: null,
  postType: null,
  userID: null,
};

const reducer = createReducer(
  initialState,
  on(setNewPostDate, (state: I_POST, action) => {
    return {
      ...state,
      postOriginalDate: action.postOriginalDate,
    };
  }),
  on(setNewPostType, (state: I_POST, action) => {
    return {
      ...state,
      postType: action.postType,
    };
  }),
  on(setNewPostData, (state: I_POST, action) => {
    return {
      ...state,
      ...action.postData,
    };
  }),
  on(setNewPostConnectionID, (state: I_POST, action) => {
    return { ...state, id: action.activeConnectionID };
  }),
  on(setNewPostConnections, (state: I_POST, action) => {
    return {
      ...state,
      postConnection: action.connections,
    };
  }),
);

function newPostReducer(state: I_POST, action: Action) {
  return reducer(state, action);
}

export { newPostFeatureKey, newPostReducer };
