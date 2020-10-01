import { CalViewState } from '../model/calendar.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { schedulePostFeatureKey } from '../reducer/calendar.reducer';

const selectPostDataState = createFeatureSelector<CalViewState>(schedulePostFeatureKey);

const selectCalendarSettings = createSelector(selectPostDataState, (calSettings) => calSettings);
const selectCalendarFirstDay = createSelector(selectCalendarSettings, (calSettings) => calSettings.firstDay);
const selectCalendarNonCurrentDates = createSelector(selectCalendarSettings, (calSettings) => calSettings.showNonCurrentDates);

export { selectCalendarFirstDay, selectCalendarNonCurrentDates, selectCalendarSettings, selectPostDataState };
