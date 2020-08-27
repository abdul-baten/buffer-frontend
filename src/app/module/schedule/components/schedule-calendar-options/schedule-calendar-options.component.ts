import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component } from '@angular/core';
import { format } from 'date-fns';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'buffer--schedule-calendar-options',
  styleUrls: ['./schedule-calendar-options.component.scss'],
  templateUrl: './schedule-calendar-options.component.html',
})
export class ScheduleCalendarOptionsComponent {
  isWeb: Observable<boolean>;
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  calendarViewSelectionItems: SelectItem[] = [
    { label: 'Month', value: CALENDAR_VIEW.DAY_GRID_MONTH },
    { label: 'Week', value: CALENDAR_VIEW.TIME_GRID_WEEK },
    { label: 'Day', value: CALENDAR_VIEW.TIME_GRID_DAY },
  ];

  constructor(private readonly location: Location, private scheduleFacade: ScheduleFacade) {
    this.isWeb = this.scheduleFacade.isWeb();
  }

  backClicked(): void {
    this.location.back();
  }

  onCalendarViewChanged(calendarViewSelection: any): void {
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
