import {
  Action,
  createReducer,
  on
} from '@ngrx/store';
import { delete_connection, set_connection } from '../actions';
import { IConnection } from '../core/model';

export const connection_feature_key = 'connection';
export const connection_initial_state: IConnection[] = [];

const reducer = createReducer(
  connection_initial_state,
  on(set_connection, (state: IConnection[], action: { connection: IConnection }) => {
    const { connection } = action;

    return [...state, connection];
  }),
  on(delete_connection, (state: IConnection[], action: { connection: IConnection }) => {
    const { connection } = action;
    const remove_connections = state.filter((entry: IConnection) => entry.id !== connection.id);

    return [...remove_connections];
  })
);

export const connection_reducer = (state: IConnection[], action: Action): IConnection[] => reducer(state, action);
