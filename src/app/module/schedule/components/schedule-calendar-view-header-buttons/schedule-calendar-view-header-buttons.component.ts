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
    this.calendarSidebarOpened$ = this.scheduleFacade.getCalendarSidebarStatus();

    this.subscriptions$.add(
      this.scheduleFacade.getCalendarSidebarStatus().subscribe(result => {
        this.calendarSidebarOpened = result;
      }),
    );
  }

  handleSettingsBtnClick(): void {
    this.scheduleFacade.handleCalendarSettingsDialogOpen();
  }

  handleNewPostBtnClick(): void {
    this.scheduleFacade.handlePostCreateDialogOpen(new Date());
  }

  handleSidebarMenuBtnClick(): void {
    this.scheduleFacade.setCalendarSidebarStatus(!this.calendarStatus);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
