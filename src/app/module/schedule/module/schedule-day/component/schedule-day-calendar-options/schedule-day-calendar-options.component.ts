// Core Module
import { Component } from '@angular/core';

// Third Party Module
import { format } from 'date-fns';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// Facade
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Enums
import { CALENDAR_VIEW_OPTIONS } from 'src/app/module/schedule/enum/calendar-view-options.enum';

// Components
import { ScheduleCalendarViewComponent } from '@shared/module/schedule-calendar-view/container/schedule-calendar-view.component';

@Component({
  selector: 'buffer--schedule-day-calendar-options',
  templateUrl: './schedule-day-calendar-options.component.html',
  styleUrls: ['./schedule-day-calendar-options.component.scss']
})
export class ScheduleDayCalendarOptionsComponent {
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CALENDAR_VIEW_OPTIONS.DAY;

  constructor(private scheduleDayFacade: ScheduleFacade) {}

  onCalendarViewChanged(calendarViewSelection: MatButtonToggleChange): void {
    this.scheduleDayFacade.changeCalendarViewOption(calendarViewSelection.value);
  }

  onTodayBtnClicked(): void {
    ScheduleCalendarViewComponent.calendarToday();
  }

  onPrevBtnClicked(): void {
    ScheduleCalendarViewComponent.calendarPrev();
  }

  onNextBtnClicked(): void {
    ScheduleCalendarViewComponent.calendarNext();
  }
}
