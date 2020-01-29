import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component } from '@angular/core';
import { format } from 'date-fns';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-calendar-options',
  templateUrl: './schedule-calendar-options.component.html',
  styleUrls: ['./schedule-calendar-options.component.scss'],
})
export class ScheduleCalendarOptionsComponent {
  isWeb: Observable<boolean>;
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  constructor(private scheduleFacade: ScheduleFacade) {
    this.isWeb = this.scheduleFacade.isWeb();
  }

  onCalendarViewChanged(calendarViewSelection: MatButtonToggleChange): void {
    this.scheduleFacade.changeCalendarViewOption(calendarViewSelection.value);
  }

  onTodayBtnClicked(): void {
    this.scheduleFacade.calendarToday();
  }

  onPrevBtnClicked(): void {
    this.scheduleFacade.calendarPrev();
  }

  onNextBtnClicked(): void {
    this.scheduleFacade.calendarNext();
  }
}
