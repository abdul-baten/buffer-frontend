import { createFeatureSelector, createSelector } from '@ngrx/store';
import { I_POST } from '@core/model';
import { newPostFeatureKey } from '../reducers';

const selectNewPostDataState = createFeatureSelector<I_POST>(newPostFeatureKey);

const selectNewPostAllData = createSelector(selectNewPostDataState, postData => postData);
const selectNewPostDate = createSelector(selectNewPostDataState, postData => postData.postOriginalDate);
const selectNewPostType = createSelector(selectNewPostDataState, postData => postData.postType);
const selectNewPostActiveConnectionID = createSelector(selectNewPostDataState, postData => postData.id);

export {
  selectNewPostActiveConnectionID,
  selectNewPostAllData,
  selectNewPostDataState,
  selectNewPostDate,
  selectNewPostType,
};
