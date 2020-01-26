// Store
import { ActionReducerMap } from '@ngrx/store';
import * as fromScheduleReducer from './schedule.reducers';
import * as fromCalendarReducer from './calendar.reducers';

// Models
import { CalViewState } from '@app/schedule/model/calendar.model';
import { CalPostInterface } from '../model/schedule.model';

const schedulePostFeatureKey = 'schedulePostData';

interface AppScheduleState {
  calendar: CalViewState;
  schedule: CalPostInterface;
}

const reducers: ActionReducerMap<AppScheduleState> = {
  calendar: fromCalendarReducer.reducer,
  schedule: fromScheduleReducer.reducer,
};

export { reducers, AppScheduleState, schedulePostFeatureKey };
