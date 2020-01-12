// Store
import { createAction, props } from '@ngrx/store';

const setCalendarFirstDay = createAction('[Schedule Facade] Set Calendar First Day', props<{ firstDay: number }>());

const setCalendarNonCurrentDates = createAction(
  '[Schedule Facade] Set Calendar NonCurrentDates',
  props<{ showNonCurrentDates: boolean }>(),
);

export { setCalendarFirstDay, setCalendarNonCurrentDates };
