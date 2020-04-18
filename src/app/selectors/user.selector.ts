import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey } from '../reducers/user.reducer';
import { AppState } from '../reducers';

const selectUser = createFeatureSelector<AppState>(userFeatureKey);

const selectUserInfo = createSelector(selectUser, user => user);

export { selectUserInfo };
