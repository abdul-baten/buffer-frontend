import { createFeatureSelector, createSelector } from '@ngrx/store';
import { E_POST_TYPE } from '../core/enum';
import { I_MEDIA, I_POST } from '../core/model';
import { newPostFeatureKey } from '../reducers';

const selectNewPostDataState = createFeatureSelector<I_POST>(newPostFeatureKey);

const selectPostInfo = createSelector(selectNewPostDataState, (postData) => postData);
const selectNewPostDate = createSelector(selectNewPostDataState, (postData) => postData.postOriginalDate);
const selectNewPostType = createSelector(selectNewPostDataState, (postData) => postData.postType as E_POST_TYPE);
const selectNewPostActiveConnectionID = createSelector(selectNewPostDataState, (postData) => postData.id as string);
const selectNewPostMedias = createSelector(selectNewPostDataState, (postData) => postData.postMedia as I_MEDIA[]);

export { selectNewPostActiveConnectionID, selectPostInfo, selectNewPostDataState, selectNewPostDate, selectNewPostMedias, selectNewPostType };
