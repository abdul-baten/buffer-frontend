import { CalPostInterface } from '@core/model/post/post.model';
import { createAction, props } from '@ngrx/store';
import { POST_TYPE } from '@core/enum/post/post-type.enum';

const removeNewPostData = createAction('[Post Create Modal Facade] Remove Post Data');

const setNewPostDate = createAction(
  '[Post Create Modal Facade] Set New Post Date',
  props<{ postOriginalDate: string }>(),
);

const setNewPostType = createAction('[Post Create Modal Facade] Set New Post Type', props<{ postType: POST_TYPE }>());

const setNewPostData = createAction(
  '[Post Create Modal Facade] Set New Post Data',
  props<{ postData: CalPostInterface }>(),
);

export { removeNewPostData, setNewPostDate, setNewPostType, setNewPostData };
