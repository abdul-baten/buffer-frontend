import { ActivatedRoute } from '@angular/router';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component, OnInit } from '@angular/core';
import { DocumentInterface } from '@core/model/document/document.model';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  calendarSidebarOpened$: Observable<boolean>;
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;

  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 70;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  constructor(private activatedRoute: ActivatedRoute, private scheduleFacade: ScheduleFacade) {
    this.isHandset$ = this.scheduleFacade.isHandset();
    this.isTablet$ = this.scheduleFacade.isTablet();
    this.calendarSidebarOpened$ = this.scheduleFacade.getCalendarSidebarStatus();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: DocumentInterface) => this.scheduleFacade.setDocumentTitle(data.title));
  }
}
