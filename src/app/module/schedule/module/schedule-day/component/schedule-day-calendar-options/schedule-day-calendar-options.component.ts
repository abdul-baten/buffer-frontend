// Core Module
import { Component } from '@angular/core';

// Third Party Module
import { format } from 'date-fns';
import { CalendarView } from 'angular-calendar';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// Service
import { ScheduleDayFacade } from '../../facade/schedule-day.facade';

@Component({
  selector: 'buffer--schedule-day-calendar-options',
  templateUrl: './schedule-day-calendar-options.component.html',
  styleUrls: ['./schedule-day-calendar-options.component.scss']
})
export class ScheduleDayCalendarOptionsComponent {
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CalendarView.Day;

  constructor(private scheduleDayFacade: ScheduleDayFacade) {}

  onCalendarViewChanged(calendarViewSelection: MatButtonToggleChange): void {
    this.scheduleDayFacade.changeCalendarViewOption(calendarViewSelection.value);
  }
}
