import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-calendar-view-header-buttons',
  styleUrls: ['./schedule-calendar-view-header-buttons.component.scss'],
  templateUrl: './schedule-calendar-view-header-buttons.component.html',
})
export class ScheduleCalendarViewHeaderButtonsComponent {
  calendarSidebarOpened$: Observable<boolean>;
  isWeb$: Observable<boolean>;

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
    this.scheduleFacade.getCalendarSidebarStatus().subscribe(result => {
      this.calendarSidebarOpened = result;
    });
  }

  handleSettingsBtnClick(): void {
    this.scheduleFacade.openCalenderSettings();
  }

  handleNewPostBtnClick(): void {
    this.scheduleFacade.openCreatePostForm(new Date());
  }

  handleSidebarMenuBtnClick(): void {
    this.scheduleFacade.setCalendarSidebarStatus(!this.calendarStatus);
  }
}
