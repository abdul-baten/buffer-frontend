// Core Module
import { Injectable, OnDestroy, HostListener } from '@angular/core';

// Third Party Module
import { fromEvent } from 'rxjs';
import { SubSink } from 'subsink';
import { distinctUntilKeyChanged, pluck, shareReplay, distinctUntilChanged } from 'rxjs/operators';

// Facade
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Enums
import { CALENDAR_VIEW } from 'src/app/module/schedule/enum/calendar-view-options.enum';

@Injectable({
  providedIn: 'root',
})
export class KeyboardEventService implements OnDestroy {
  private subscriptions$ = new SubSink();

  constructor(private scheduleFacade: ScheduleFacade) {}

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  handleKeyboardEvent() {
    this.subscriptions$.add(
      fromEvent(document, 'keypress')
        .pipe(
          distinctUntilKeyChanged<KeyboardEvent>('keyCode'),
          distinctUntilChanged(),
          pluck('keyCode'),
          shareReplay()
        )
        .subscribe((keyCode: number) => {
          switch (keyCode) {
            case 109:
              this.scheduleFacade.changeCalendarViewOption(CALENDAR_VIEW.DAY_GRID_MONTH);
              break;
            case 119:
              this.scheduleFacade.changeCalendarViewOption(CALENDAR_VIEW.TIME_GRID_WEEK);
              break;
            case 100:
              this.scheduleFacade.changeCalendarViewOption(CALENDAR_VIEW.TIME_GRID_DAY);
              break;
            default:
              break;
          }
        })
    );
  }
}
