import { Action, createReducer, on } from '@ngrx/store';
import { set_user_info } from '../actions';
import { IUser } from '../core/model';

export const user_feature_key = 'user';
export const user_initial_state: IUser = {
  id: '',
  user_created_at: new Date(),
  user_email: '',
  user_full_name: '',
  user_is_suspended: false,
  user_password: '',
  user_subscription_plan: {},
  user_updated_at: new Date()
};

const reducer = createReducer(
  user_initial_state,
  on(set_user_info, (state: IUser, action: { user: Partial<IUser> }) => {
    const { user } = action;

    return {
      ...state,
      ...user
    };
  })
);

export const user_reducer = (state: IUser, action: Action): IUser => reducer(state, action);
