import { createAction, props } from '@ngrx/store';
import { User } from '@core/model/user/user.model';

const setUserInfo = createAction('[Signup] Set User Info', props<{ user: User }>());

export { setUserInfo };
