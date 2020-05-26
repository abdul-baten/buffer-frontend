import { ActivatedRoute, Params } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { AuthGuardService } from '@core/service/auth-guard/auth-guard.service';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { I_DOCUMENT } from '@core/model';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { selectConnectionByID } from 'src/app/selectors/connection.selector';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { switchMap } from 'rxjs/operators';

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
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private scheduleFacade: ScheduleFacade,
    private store: Store<AppState>,
  ) {
    this.isHandset$ = this.scheduleFacade.isHandset();
    this.isTablet$ = this.scheduleFacade.isTablet();
    this.calendarSidebarOpened$ = this.scheduleFacade.getCalendarSidebarStatus();
  }

  ngOnInit() {
    this.authGuardService.canActivate();
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((data: I_DOCUMENT) => this.scheduleFacade.setDocumentTitle(data.title)),
    );

    this.activatedRoute.params
      .pipe(switchMap((params: Params) => this.store.select(selectConnectionByID(params.id))))
      .subscribe();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
