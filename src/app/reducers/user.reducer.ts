import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '@core/model/user/user.model';
import { setUserInfo } from 'src/app/actions';

const userFeatureKey = 'user';

const userInitialState: IUser = {
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
  on(setUserInfo, (state: IUser, action: { user: Partial<IUser> }) => {
    const { user } = action;
    return {
      ...state,
      ...user,
    };
  }),
);

function userReducer(state: IUser | undefined, action: Action) {
  return reducer(state, action);
}

export { userFeatureKey, userInitialState, userReducer };
