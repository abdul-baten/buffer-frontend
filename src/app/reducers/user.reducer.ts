import { Action, createReducer, on } from '@ngrx/store';
import { setUserInfo } from 'src/app/actions';
import { User } from '@core/model/user/user.model';

const userFeatureKey = 'user';

const userInitialState: User = {
  id: null,
  fullName: null,
  email: null,
};

const reducer = createReducer(
  userInitialState,
  on(setUserInfo, (state: User, action: { user: User }) => {
    const { user } = action;
    return {
      ...state,
      ...user,
    };
  }),
);

function userReducer(state: User | undefined, action: Action) {
  return reducer(state, action);
}

export { userFeatureKey, userInitialState, userReducer };
