import { connection_feature_key, connection_reducer } from './connection.reducer';
import { routerReducer } from '@ngrx/router-store';
import { user_feature_key, user_reducer } from './user.reducer';
import { ActionReducerMap } from '@ngrx/store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppState {}

const reducers: ActionReducerMap<any> = {
  connection: connection_reducer,
  router: routerReducer,
  user: user_reducer
};

export { reducers, user_feature_key, connection_feature_key };
