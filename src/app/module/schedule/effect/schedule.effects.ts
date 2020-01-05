// Core Modules
import { Injectable } from '@angular/core';

// Third Party Modules
import { tap } from 'rxjs/operators';

// Facades
import { ScheduleFacade } from '../facade/schedule.facade';

// Stores
import { fromScheduleActions } from '../action';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class ScheduleEffects {
  createPostSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromScheduleActions.removePostData),
        tap(_ => this.scheduleFacade.openSnackbar('Post scheduled successfully'))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private scheduleFacade: ScheduleFacade) {}
}
