import { createFeatureSelector, createSelector } from '@ngrx/store';
import { I_USER } from '../core/model';
import { userFeatureKey } from '../reducers/user.reducer';

const selectUser = createFeatureSelector<I_USER>(userFeatureKey);

export const selectUserInfo = createSelector(selectUser, (user) => user);
export const selectUserEmail = createSelector(selectUserInfo, (user) => user.email);
export const selectUserId = createSelector(selectUserInfo, (user) => user.id);
