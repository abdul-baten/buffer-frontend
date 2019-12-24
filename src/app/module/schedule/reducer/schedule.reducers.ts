import { createReducer, on, Action } from '@ngrx/store';
import { fromScheduleActions } from '../action';

// Model
import { PostScheduleState } from '../model/schedule.model';

export const initialState: PostScheduleState = {
  postDate: null,
  postTime: null,
  postNow: false,
  postLink: null,
  postType: null,
  postAuto: false,
  postImages: null,
  postVideos: null,
  postDraft: false,
  postCaption: null,
  postLocation: null,
  postOriginalDate: null
};

export const postDataReducer = createReducer(
  initialState,
  on(fromScheduleActions.setDefaultPostData, _ => initialState),
  on(fromScheduleActions.setPostDate, (state, action) => {
    return {
      ...state,
      postOriginalDate: action.postOriginalDate
    };
  }),
  on(fromScheduleActions.setPostType, (state, action) => {
    return {
      ...state,
      postType: action.postType
    };
  }),
  on(fromScheduleActions.setPostData, (state, action) => {
    return {
      ...state,
      ...action.postData
    };
  })
);

export function reducer(state: PostScheduleState | undefined, action: Action) {
  return postDataReducer(state, action);
}
