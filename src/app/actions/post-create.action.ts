import { createAction, props } from '@ngrx/store';
import { E_POST_TYPE } from '../core/enum';
import { I_CONNECTION, I_POST } from '../core/model';

const removeNewPostData = createAction('[Post Create Modal Facade] Remove Post Data');

const setNewPostDate = createAction('[Post Create Modal Facade] Set New Post Date', props<{ postOriginalDate: string }>());

const setPostType = createAction('[Post Create Modal Facade] Set New Post Type', props<{ postType: E_POST_TYPE }>());

const setNewPostConnectionID = createAction('[Post Create Modal Facade] Set New Post Connection ID', props<{ activeConnectionID: string }>());

const setNewPostData = createAction('[Post Create Modal Facade] Set New Post Data', props<{ postData: I_POST }>());

const setNewPostConnections = createAction('[Post Create Modal Facade] Set New Post Connections', props<{ connection: Partial<I_CONNECTION> }>());

const setNewPostMedia = createAction('[Post Create Modal Facade] Set New Post Media', props<{ media: string }>());

const removeNewPostMedia = createAction('[Post Create Modal Facade] Remove New Post Media', props<{ media: string }>());

const removeNewPostAllMedia = createAction('[Post Create Modal Facade] Remove New Post All Medias');

export {
  removeNewPostAllMedia,
  removeNewPostData,
  removeNewPostMedia,
  setNewPostConnectionID,
  setNewPostConnections,
  setNewPostData,
  setNewPostDate,
  setNewPostMedia,
  setPostType,
};
