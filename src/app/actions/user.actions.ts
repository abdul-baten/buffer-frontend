import { createAction, props } from '@ngrx/store';
import { I_USER } from '../core/model';

const setUserInfo = createAction('[Signup] Set User Info', props<{ user: Partial<I_USER> }>());

export { setUserInfo };
