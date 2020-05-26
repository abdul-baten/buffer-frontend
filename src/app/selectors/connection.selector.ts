import { connectionFeatureKey } from '../reducers/connection.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { I_CONNECTION } from '@core/model';

const selectConnection = createFeatureSelector<I_CONNECTION[]>(connectionFeatureKey);

export const selectAllConnection = createSelector(selectConnection, (connections: I_CONNECTION[]) => connections);

export const selectConnectionLength = createSelector(
  selectAllConnection,
  (connections: I_CONNECTION[]) => connections.length,
);

export const selectConnectionByID = (connectionID: string) => {
  return createSelector(selectAllConnection, (entities: I_CONNECTION[]) => {
    const connections = entities.filter((item: I_CONNECTION) => item._id === connectionID);
    return connections[0];
  });
};
