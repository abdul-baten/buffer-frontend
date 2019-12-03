// Core Module
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Application Specific
import { PAGES } from '@core/constant/page/page.constant';

// Third Party Module
import { fromEvent } from 'rxjs';
import { distinctUntilKeyChanged, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KeyboardEventService {
  constructor(private router: Router) {}

  handleKeyboardEvent() {
    fromEvent(document, 'keypress')
      .pipe(distinctUntilKeyChanged<KeyboardEvent>('keyCode'), pluck('keyCode'))
      .subscribe((keyCode: number) => {
        switch (keyCode) {
          case 109:
            console.log(109, 'm pressed');
            this.router.navigateByUrl(`schedule/${PAGES.SCHEDULE_MONTH_PAGE.ROUTE}`);
            break;
          case 119:
            console.log(119, 'w pressed');
            this.router.navigateByUrl(`schedule/${PAGES.SCHEDULE_WEEK_PAGE.ROUTE}`);
            break;
          case 100:
            console.log(100, 'd pressed');
            this.router.navigateByUrl(`schedule/${PAGES.SCHEDULE_DAY_PAGE.ROUTE}`);
            break;
          default:
            break;
        }
      });
  }
}
