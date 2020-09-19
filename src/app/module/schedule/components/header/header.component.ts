import format from 'date-fns/format';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { SelectItem } from 'primeng/api';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  isWeb$: Observable<boolean>;
  currentDate = format(new Date(), 'eeee, MMMM dd');

  selectedCalendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  calendarViewSelectionItems: SelectItem[] = [
    { label: 'Month', value: CALENDAR_VIEW.DAY_GRID_MONTH },
    { label: 'Week', value: CALENDAR_VIEW.TIME_GRID_WEEK },
    { label: 'Day', value: CALENDAR_VIEW.TIME_GRID_DAY },
  ];

  private subscriptions$ = new SubSink();

  constructor(private facade: ScheduleFacade) {
    this.isWeb$ = this.facade.isWeb();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
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
