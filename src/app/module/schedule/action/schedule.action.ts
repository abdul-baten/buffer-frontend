import { CalPostInterface } from '@core/model/post/schedule.model';
import { createAction, props } from '@ngrx/store';
import { POST_TYPE } from '@core/enum/post/post-type.enum';

export const removePostData = createAction('[Schedule Effect] Remove Post Data');

export const setPostDate = createAction(
  '[Schedule Facade] Set Schedule Post Date',
  props<{ postOriginalDate: string }>(),
);

export const setPostType = createAction('[Schedule Facade] Set Schedule Post Type', props<{ postType: POST_TYPE }>());

export const setPostData = createAction(
  '[Schedule Facade] Set Schedule Post Data',
  props<{ postData: CalPostInterface }>(),
);
