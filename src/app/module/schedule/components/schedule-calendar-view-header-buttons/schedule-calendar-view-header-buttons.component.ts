import { Component, OnDestroy, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--schedule-calendar-view-header-buttons',
  styleUrls: ['./schedule-calendar-view-header-buttons.component.scss'],
  templateUrl: './schedule-calendar-view-header-buttons.component.html',
})
export class ScheduleCalendarViewHeaderButtonsComponent implements OnDestroy {
  calendarSidebarOpened$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  private subscriptions$ = new SubSink();

  private calendarStatus: boolean;
  get calendarSidebarOpened(): boolean {
    return this.calendarStatus;
  }

  set calendarSidebarOpened(status: boolean) {
    this.calendarStatus = status;
  }

  constructor(private scheduleFacade: ScheduleFacade) {
    this.isWeb$ = this.scheduleFacade.isWeb();
  }

  handleSettingsBtnClick(): void {
    this.scheduleFacade.handleCalendarSettingsDialogOpen();
  }

  handleNewPostBtnClick(): void {
    this.scheduleFacade.handlePostCreateDialogOpen(new Date());
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
