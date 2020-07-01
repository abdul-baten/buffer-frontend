import { Action, createReducer, on } from '@ngrx/store';
import { addMinutes, formatISO } from 'date-fns';
import { I_POST } from '@core/model';
import {
  setNewPostConnectionID,
  setNewPostConnections,
  setNewPostData,
  setNewPostDate,
  setNewPostMedia,
  setNewPostType,
  removeNewPostMedia,
  removeNewPostData,
  removeNewPostAllMedia,
} from '../actions';

const newPostFeatureKey = 'newPost';

const initialState: Partial<I_POST> = {
  id: null,
  postCaption: null,
  postConnection: {},
  postMedia: [],
  postScheduleDateTime: null,
  postStatus: null,
  postType: null,
  userID: null,
};

const reducer = createReducer(
  initialState,
  on(setNewPostDate, (state: I_POST, action) => {
    return {
      ...state,
      postOriginalDate: formatISO(addMinutes(new Date(action.postOriginalDate), 15)),
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
      postConnection: action.connection,
    };
  }),
  on(setNewPostMedia, (state: any, action) => {
    return {
      ...state,
      postMedia: [...state.postMedia, action.media],
    };
  }),
  on(removeNewPostMedia, (state: any, action) => {
    const { media } = action;
    const mediaIndex = state.postMedia.findIndex((entry: string) => entry === media);
    return {
      ...state,
      postMedia: [...state.postMedia.slice(0, mediaIndex), ...state.postMedia.slice(mediaIndex + 1)],
    };
  }),
  on(removeNewPostData, _ => {
    return initialState;
  }),
  on(removeNewPostAllMedia, (state: any) => {
    return {
      ...state,
      postMedia: [],
    };
  }),
);

function newPostReducer(state: I_POST, action: Action) {
  return reducer(state, action);
}

export { newPostFeatureKey, newPostReducer };
