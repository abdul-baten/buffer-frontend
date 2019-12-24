// Store
import * as fromScheduleReducer from '../reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Models
import { PostScheduleState } from '../model/schedule.model';

export const selectPostDataState = createFeatureSelector<PostScheduleState>(fromScheduleReducer.schedulePostFeatureKey);

export const selectPostDate = createSelector(selectPostDataState, postData => postData.postOriginalDate);
export const selectPostType = createSelector(selectPostDataState, postData => postData.postType);
