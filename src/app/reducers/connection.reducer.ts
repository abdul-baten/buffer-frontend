import { Action, createReducer, on } from '@ngrx/store';
import { deleteConnection, setConnection } from '../actions';
import { I_CONNECTION } from '../core/model';

const connectionFeatureKey = 'connection';

const connectionInitialState: I_CONNECTION[] = [];

const reducer = createReducer(
  connectionInitialState,
  on(setConnection, (state: I_CONNECTION[], action: { connection: I_CONNECTION }) => {
    const { connection } = action;
    return [...state, connection];
  }),
  on(deleteConnection, (state: I_CONNECTION[], action: { connection: I_CONNECTION }) => {
    const { connection } = action;
    const removedConnections = state.filter((entry: I_CONNECTION) => entry.id !== connection.id);
    return [...removedConnections];
  }),
);

function connectionReducer(state: I_CONNECTION[], action: Action) {
  return reducer(state, action);
}

export { connectionFeatureKey, connectionInitialState, connectionReducer };
