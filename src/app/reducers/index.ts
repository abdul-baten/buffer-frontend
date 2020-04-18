import { ActionReducerMap } from '@ngrx/store';
import { memberFeatureKey, memberReducer } from './member.reducer';
import { routerReducer } from '@ngrx/router-store';
import { userFeatureKey, userReducer } from './user.reducer';

interface AppState {}

const reducers: ActionReducerMap<any> = {
  router: routerReducer,
  user: userReducer,
  member: memberReducer,
};

export { AppState, memberFeatureKey, reducers, userFeatureKey };
