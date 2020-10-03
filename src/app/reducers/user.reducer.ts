import { Action, createReducer, on } from '@ngrx/store';
import { I_USER } from '../core/model';
import { setUserInfo } from '../actions';

const userFeatureKey = 'user';

const userInitialState: I_USER = {
  createdAt: new Date(),
  email: '',
  fullName: '',
  id: '',
  password: '',
  subscription: {},
  updatedAt: new Date(),
  userSuspended: false,
};

const reducer = createReducer(
  userInitialState,
  on(setUserInfo, (state: I_USER, action: { user: Partial<I_USER> }) => {
    const { user } = action;
    return {
      ...state,
      ...user,
    };
  }),
);

function userReducer(state: I_USER | undefined, action: Action) {
  return reducer(state, action);
}

export { userFeatureKey, userInitialState, userReducer };
