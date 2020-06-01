import { ActionReducerMap } from '@ngrx/store';
import { connectionFeatureKey, connectionReducer } from './connection.reducer';
import { newPostFeatureKey, newPostReducer } from './post-create.reducer';
import { routerReducer } from '@ngrx/router-store';
import { userFeatureKey, userReducer } from './user.reducer';

// tslint:disable-next-line
interface AppState {}

const reducers: ActionReducerMap<any> = {
  router: routerReducer,
  user: userReducer,
  connection: connectionReducer,
  newPost: newPostReducer,
};

export { AppState, reducers, userFeatureKey, connectionFeatureKey, newPostFeatureKey };
