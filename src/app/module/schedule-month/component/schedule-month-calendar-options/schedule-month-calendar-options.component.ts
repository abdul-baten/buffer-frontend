// Core Module
import { Component } from '@angular/core';

// Third Party Module
import { format } from 'date-fns';
import { CalendarView } from 'angular-calendar';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// Service
import { ScheduleMonthFacade } from '../../facade/schedule-month.facade';

@Component({
  selector: 'buffer--schedule-month-calendar-options',
  templateUrl: './schedule-month-calendar-options.component.html',
  styleUrls: ['./schedule-month-calendar-options.component.scss']
})
export class ScheduleMonthCalendarOptionsComponent {
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CalendarView.Month;

  constructor(private scheduleMonthFacade: ScheduleMonthFacade) {}

  onCalendarViewChanged(calendarViewSelection: MatButtonToggleChange): void {
    this.scheduleMonthFacade.changeCalendarViewOption(calendarViewSelection.value);
  }
}
