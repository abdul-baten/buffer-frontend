import format from 'date-fns/format';
import { CALENDAR_VIEW } from '../../enum/calendar-view-options.enum';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '../../facade/schedule.facade';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'buffer--header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isWeb$: Observable<boolean>;
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  calendarViewSelectionItems: SelectItem[] = [
    { label: 'Month', value: CALENDAR_VIEW.DAY_GRID_MONTH },
    { label: 'Week', value: CALENDAR_VIEW.TIME_GRID_WEEK },
    { label: 'Day', value: CALENDAR_VIEW.TIME_GRID_DAY },
  ];

  constructor(private facade: ScheduleFacade) {
    this.isWeb$ = this.facade.isWeb();
  }

  onCalendarViewChanged(calendarViewSelection: any): void {
    this.facade.changeCalendarViewOption(calendarViewSelection.value);
  }

  onTodayBtnClicked(): void {
    this.facade.calendarToday();
  }

  onPrevBtnClicked(): void {
    this.facade.calendarPrev();
  }

  onNextBtnClicked(): void {
    this.facade.calendarNext();
  }
}
