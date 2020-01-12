// Core Modules
import { Injectable } from '@angular/core';

// Third Party Modules
import { tap } from 'rxjs/operators';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

// Store
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fromScheduleActions, fromCalendarActions } from '@app/schedule/action';

@Injectable()
export class ScheduleEffects {
  createPostSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromScheduleActions.removePostData),
        tap(_ => this.scheduleFacade.openSnackbar('Post scheduled successfully')),
      ),
    { dispatch: false },
  );

  setCalendarSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromCalendarActions.setCalendarFirstDay),
        tap(_ => {}),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private scheduleFacade: ScheduleFacade) {}
}
