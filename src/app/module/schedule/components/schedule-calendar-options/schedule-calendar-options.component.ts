// Core Module
import { Component } from '@angular/core';

// Third Party Module
import { format } from 'date-fns';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

// Enums
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';

@Component({
  selector: 'buffer--schedule-calendar-options',
  templateUrl: './schedule-calendar-options.component.html',
  styleUrls: ['./schedule-calendar-options.component.scss'],
})
export class ScheduleCalendarOptionsComponent {
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  constructor(private scheduleFacade: ScheduleFacade) {}

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
