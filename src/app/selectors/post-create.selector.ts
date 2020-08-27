import { createFeatureSelector, createSelector } from '@ngrx/store';
import { I_POST } from '@core/model';
import { newPostFeatureKey } from '../reducers';

const selectNewPostDataState = createFeatureSelector<I_POST>(newPostFeatureKey);

const selectPostInfo = createSelector(selectNewPostDataState, postData => postData);
const selectNewPostDate = createSelector(selectNewPostDataState, postData => postData.postOriginalDate);
const selectNewPostType = createSelector(selectNewPostDataState, postData => postData.postType);
const selectNewPostActiveConnectionID = createSelector(selectNewPostDataState, postData => postData.id);
const selectNewPostMedias = createSelector(selectNewPostDataState, postData => postData.postMedia);

export { selectNewPostActiveConnectionID, selectPostInfo, selectNewPostDataState, selectNewPostDate, selectNewPostMedias, selectNewPostType };
