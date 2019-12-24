// Core Module
import { Component } from '@angular/core';

// Third Party Module
import { format } from 'date-fns';
import { CalendarView } from 'angular-calendar';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// Facade
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-month-calendar-options',
  templateUrl: './schedule-month-calendar-options.component.html',
  styleUrls: ['./schedule-month-calendar-options.component.scss']
})
export class ScheduleMonthCalendarOptionsComponent {
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CalendarView.Month;

  constructor(private scheduleFacade: ScheduleFacade) {}

  onCalendarViewChanged(calendarViewSelection: MatButtonToggleChange): void {
    this.scheduleFacade.changeCalendarViewOption(calendarViewSelection.value);
  }
}
