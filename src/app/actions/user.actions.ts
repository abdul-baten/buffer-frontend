import { createAction, props } from '@ngrx/store';
import { IUser } from '../core/model';

export const set_user_info = createAction('[Signup] Set User Info', props<{ user: Partial<IUser> }>());
