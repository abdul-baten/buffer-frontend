import { createReducer, on, Action } from '@ngrx/store';
import { fromScheduleActions } from '@app/schedule/action';

// Model
import { ScheduleState } from '@app/schedule/model/schedule.model';

export const initialState: ScheduleState = {
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
  postOriginalDate: null,
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

export function reducer(state: ScheduleState | undefined, action: Action) {
  return postDataReducer(state, action);
}
