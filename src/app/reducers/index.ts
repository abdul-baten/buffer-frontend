import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

// export interface AppState {}

export const reducers: ActionReducerMap<any> = {
  router: routerReducer
};
