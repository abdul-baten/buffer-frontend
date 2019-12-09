// Core Module
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Application Specific
import { environment } from '@env/environment';
import { PAGES } from '@core/constant/page/page.constant';

// Third Party Module
import { fromEvent } from 'rxjs';
import { distinctUntilKeyChanged, pluck, shareReplay, distinctUntilChanged } from 'rxjs/operators';

// Constants
const SCHEDULE_URL = environment.scheduleURL;

@Injectable({
  providedIn: 'root'
})
export class KeyboardEventService {
  constructor(private router: Router) {}

  handleKeyboardEvent() {
    fromEvent(document, 'keypress')
      .pipe(distinctUntilKeyChanged<KeyboardEvent>('keyCode'), distinctUntilChanged(), pluck('keyCode'), shareReplay())
      .subscribe((keyCode: number) => {
        switch (keyCode) {
          case 109:
            this.router.navigateByUrl(`${SCHEDULE_URL}/${PAGES.SCHEDULE_MONTH_PAGE.ROUTE}`);
            break;
          case 119:
            this.router.navigateByUrl(`${SCHEDULE_URL}/${PAGES.SCHEDULE_WEEK_PAGE.ROUTE}`);
            break;
          case 100:
            this.router.navigateByUrl(`${SCHEDULE_URL}/${PAGES.SCHEDULE_DAY_PAGE.ROUTE}`);
            break;
          default:
            break;
        }
      });
  }
}
