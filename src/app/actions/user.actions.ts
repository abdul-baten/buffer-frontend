import { createAction, props } from '@ngrx/store';
import { IUser } from '@core/model/user/user.model';

const setUserInfo = createAction('[Signup] Set User Info', props<{ user: Partial<IUser> }>());

export { setUserInfo };
