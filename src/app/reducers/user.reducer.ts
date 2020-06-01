import { Action, createReducer, on } from '@ngrx/store';
import { I_USER } from '@core/model';
import { setUserInfo } from 'src/app/actions';

const userFeatureKey = 'user';

const userInitialState: I_USER = {
  attribution: null,
  businessType: null,
  companyName: null,
  companySize: null,
  createdAt: null,
  email: null,
  fullName: null,
  id: null,
  password: null,
  subscription: null,
  updatedAt: null,
  userSuspended: null,
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
