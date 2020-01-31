// Store
import { createReducer, on, Action } from '@ngrx/store';
import { fromCalendarActions } from '@app/schedule/action';

// Models
import { CalViewState } from '@app/schedule/model/calendar.model';

// Enums
import { WEEK_DAY } from '@core/enum/calendar/calendar-week-days.enum';

const initialCalendarState: CalViewState = {
  calendarSidebarOpened: true,
  firstDay: WEEK_DAY.MONDAY,
  showNonCurrentDates: true,
};

const calendarSettingsReducer = createReducer(
  initialCalendarState,
  on(fromCalendarActions.setCalendarFirstDay, (state, action) => {
    const { firstDay } = action;
    return {
      ...state,
      firstDay,
    };
  }),
  on(fromCalendarActions.setCalendarNonCurrentDates, (state, action) => {
    const { showNonCurrentDates } = action;
    return {
      ...state,
      showNonCurrentDates,
    };
  }),
  on(fromCalendarActions.setCalendarSidebarStatus, (state, action) => {
    const { calendarSidebarOpened } = action;
    return {
      ...state,
      calendarSidebarOpened,
    };
  }),
);

function reducer(state: CalViewState | undefined, action: Action) {
  return calendarSettingsReducer(state, action);
}

export { reducer };
