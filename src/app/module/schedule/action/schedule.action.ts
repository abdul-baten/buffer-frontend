// Store
import { createAction, props } from '@ngrx/store';

// Models
import { PostScheduleState } from '../model/schedule.model';

// Enums
import { POST_TYPE } from '../enum/schedule-event-create-modal.enum';

export const removePostData = createAction('[Schedule Effect] Remove Post Data');

export const setPostDate = createAction(
  '[Schedule Facade] Set Schedule Post Date',
  props<{ postOriginalDate: string }>()
);

export const setPostType = createAction('[Schedule Facade] Set Schedule Post Type', props<{ postType: POST_TYPE }>());

export const setPostData = createAction(
  '[Schedule Facade] Set Schedule Post Data',
  props<{ postData: PostScheduleState }>()
);
