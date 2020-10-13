import { createAction, props } from '@ngrx/store';
import type { EPostType } from '../core/enum';
import type { IConnection, IPost } from '../core/model';

export const remove_all_post_media = createAction('[Post Create Modal Facade] Remove New Post All Medias');
export const remove_post = createAction('[Post Create Modal Facade] Remove Post Data');
export const remove_post_media = createAction('[Post Create Modal Facade] Remove New Post Media', props<{ media: string }>());
export const set_post = createAction('[Post Create Modal Facade] Set New Post Data', props<{ post_data: IPost }>());
export const set_post_connection_id = createAction('[Post Create Modal Facade] Set New Post Connection ID', props<{ connection_id: string }>());
export const set_post_connections = createAction('[Post Create Modal Facade] Set New Post Connections', props<{ connection: Partial<IConnection> }>());
export const set_post_date = createAction('[Post Create Modal Facade] Set New Post Date', props<{ post_date_time: string }>());
export const set_post_media = createAction('[Post Create Modal Facade] Set New Post Media', props<{ media: string }>());
export const set_post_type = createAction('[Post Create Modal Facade] Set New Post Type', props<{ post_type: EPostType }>());
