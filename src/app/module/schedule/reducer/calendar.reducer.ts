import { Action, createReducer, on } from '@ngrx/store';
import { CalViewState } from '@app/schedule/model/calendar.model';
import { E_CAL_WEEK_DAY } from '@core/enum';
import { setCalendarFirstDay, setCalendarNonCurrentDates } from '@app/schedule/action/calendar.action';

const schedulePostFeatureKey = 'schedulePostData';

const initialCalendarState: CalViewState = {
  firstDay: E_CAL_WEEK_DAY.MONDAY,
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
);

function reducer(state: CalViewState | undefined, action: Action) {
  return scheduleCalendarSettingsReducer(state, action);
}

export { schedulePostFeatureKey, reducer };
