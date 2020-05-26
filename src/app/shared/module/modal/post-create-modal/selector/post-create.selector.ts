import { I_POST } from '@core/model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postCreateFeatureKey } from '../reducer/post-create.reducer';

const selectNewPostDataState = createFeatureSelector<I_POST>(postCreateFeatureKey);

const selectNewPostDate = createSelector(selectNewPostDataState, postData => postData.postOriginalDate);
const selectNewPostType = createSelector(selectNewPostDataState, postData => postData.postType);

export { selectNewPostDataState, selectNewPostDate, selectNewPostType };
