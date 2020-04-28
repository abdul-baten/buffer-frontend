import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey } from '../reducers/user.reducer';
import { IUser } from '@core/model/user/user.model';

const selectUser = createFeatureSelector<IUser>(userFeatureKey);

export const selectUserInfo = createSelector(selectUser, user => user);
export const selectUserEmail = createSelector(selectUserInfo, user => user.email);
