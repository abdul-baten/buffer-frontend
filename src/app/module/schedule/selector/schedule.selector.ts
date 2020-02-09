import * as fromScheduleReducer from '@app/schedule/reducer/calendar.reducer';
import { CalViewState } from '../model/calendar.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectPostDataState = createFeatureSelector<CalViewState>(fromScheduleReducer.schedulePostFeatureKey);

const selectCalendarSettings = createSelector(selectPostDataState, calSettings => calSettings);
const selectCalendarFirstDay = createSelector(selectCalendarSettings, calSettings => calSettings.firstDay);
const selectCalendarNonCurrentDates = createSelector(
  selectCalendarSettings,
  calSettings => calSettings.showNonCurrentDates,
);
const selectCalendarSidebarStatus = createSelector(
  selectCalendarSettings,
  calSettings => calSettings.calendarSidebarOpened,
);

export {
  selectCalendarFirstDay,
  selectCalendarNonCurrentDates,
  selectCalendarSettings,
  selectCalendarSidebarStatus,
  selectPostDataState,
};
