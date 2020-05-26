import { createAction, props } from '@ngrx/store';
import { E_POST_TYPE } from '@core/enum';
import { I_POST } from '@core/model';

const removeNewPostData = createAction('[Post Create Modal Facade] Remove Post Data');

const setNewPostDate = createAction(
  '[Post Create Modal Facade] Set New Post Date',
  props<{ postOriginalDate: string }>(),
);

const setNewPostType = createAction('[Post Create Modal Facade] Set New Post Type', props<{ postType: E_POST_TYPE }>());

const setNewPostData = createAction('[Post Create Modal Facade] Set New Post Data', props<{ postData: I_POST }>());

export { removeNewPostData, setNewPostDate, setNewPostType, setNewPostData };
