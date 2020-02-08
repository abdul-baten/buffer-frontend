import { Action, createReducer, on } from '@ngrx/store';
import { CalViewState } from '@app/schedule/model/calendar.model';
import {
  setCalendarFirstDay,
  setCalendarNonCurrentDates,
  setCalendarSidebarStatus,
} from '@app/schedule/action/calendar.action';
import { WEEK_DAY } from '@core/enum/calendar/calendar-week-days.enum';

const schedulePostFeatureKey = 'schedulePostData';

const initialCalendarState: CalViewState = {
  calendarSidebarOpened: true,
  firstDay: WEEK_DAY.MONDAY,
  showNonCurrentDates: true,
};

const scheduleCalendarSettingsReducer = createReducer(
  initialCalendarState,
  on(setCalendarFirstDay, (state, action) => {
    const { firstDay } = action;
    return {
      ...state,
      firstDay,
    };
  }),
  on(setCalendarNonCurrentDates, (state, action) => {
    const { showNonCurrentDates } = action;
    return {
      ...state,
      showNonCurrentDates,
    };
  }),
  on(setCalendarSidebarStatus, (state, action) => {
    const { calendarSidebarOpened } = action;
    return {
      ...state,
      calendarSidebarOpened,
    };
  }),
);

function reducer(state: CalViewState | undefined, action: Action) {
  return scheduleCalendarSettingsReducer(state, action);
}

export { schedulePostFeatureKey, reducer };
