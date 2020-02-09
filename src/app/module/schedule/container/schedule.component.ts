import { ActivatedRoute } from '@angular/router';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { DocumentInterface } from '@core/model/document/document.model';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  calendarSidebarOpened$: Observable<boolean>;
  calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;

  private subscriptions$ = new SubSink();

  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 80;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  constructor(private activatedRoute: ActivatedRoute, private scheduleFacade: ScheduleFacade) {
    this.isHandset$ = this.scheduleFacade.isHandset();
    this.isTablet$ = this.scheduleFacade.isTablet();
    this.calendarSidebarOpened$ = this.scheduleFacade.getCalendarSidebarStatus();
  }

  ngOnInit() {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((data: DocumentInterface) => this.scheduleFacade.setDocumentTitle(data.title)),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
