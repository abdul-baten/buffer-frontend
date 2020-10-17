import dayjs from 'dayjs';
import { Component } from '@angular/core';
import { ECalendarView } from 'src/app/core/enum';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '../../facade/schedule.facade';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'buffer-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public is_platform_web$: Observable<boolean>;
  public current_date = dayjs(new Date()).format('dddd, MMMM DD');
  public selected_calendar_view = ECalendarView.DAY_GRID_MONTH;
  public calendar_view_selection_items: SelectItem[] = [
    { label: 'Month',
      value: ECalendarView.DAY_GRID_MONTH },
    { label: 'Week',
      value: ECalendarView.TIME_GRID_WEEK },
    { label: 'Day',
      value: ECalendarView.TIME_GRID_DAY }
  ];

  constructor (private facade: ScheduleFacade) {
    this.is_platform_web$ = this.facade.isWeb();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onCalendarViewChanged (calendar_view: SelectItem): void {
    this.facade.changeCalendarViewOption(calendar_view.value);
  }

  onTodayBtnClicked (): void {
    this.facade.calendarToday();
  }

  onPrevBtnClicked (): void {
    this.facade.calendarPrev();
  }

  onNextBtnClicked (): void {
    this.facade.calendarNext();
  }
}
