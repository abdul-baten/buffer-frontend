// Core Module
import { Component } from '@angular/core';

// Third Party Module
import { format } from 'date-fns';
import { CalendarView } from 'angular-calendar';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// Service
import { ScheduleWeekFacade } from '../../facade/schedule-week.facade';

@Component({
  selector: 'buffer--schedule-week-calendar-options',
  templateUrl: './schedule-week-calendar-options.component.html',
  styleUrls: ['./schedule-week-calendar-options.component.scss']
})
export class ScheduleWeekCalendarOptionsComponent {
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CalendarView.Week;

  constructor(private scheduleWeekFacade: ScheduleWeekFacade) {}

  onCalendarViewChanged(calendarViewSelection: MatButtonToggleChange): void {
    this.scheduleWeekFacade.changeCalendarViewOption(calendarViewSelection.value);
  }

  onPreviousWeekClicked() {}
}
