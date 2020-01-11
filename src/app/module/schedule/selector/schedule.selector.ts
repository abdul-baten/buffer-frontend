// Store
import * as fromScheduleReducer from '@app/schedule/reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Models
import { AppScheduleState } from '@app/schedule/reducer';

const selectPostDataState = createFeatureSelector<AppScheduleState>(fromScheduleReducer.schedulePostFeatureKey);

const selectPostDate = createSelector(selectPostDataState, postData => postData.schedule.postOriginalDate);
const selectPostType = createSelector(selectPostDataState, postData => postData.schedule.postType);

const selectCalendarSettings = createSelector(selectPostDataState, calSettings => calSettings.calendar);
const selectCalendarFirstDay = createSelector(selectCalendarSettings, calSettings => calSettings.firstDay);
const selectCalendarNonCurrentDates = createSelector(
  selectCalendarSettings,
  calSettings => calSettings.showNonCurrentDates
);

export {
  selectPostDate,
  selectPostType,
  selectPostDataState,
  selectCalendarSettings,
  selectCalendarFirstDay,
  selectCalendarNonCurrentDates
};
