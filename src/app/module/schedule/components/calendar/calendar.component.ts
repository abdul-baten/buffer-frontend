import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Calendar } from '@fullcalendar/core';
import { CALENDAR_POST_DATA } from '@app/schedule/data/calendar-post.data';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { ComponentPortal, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { delay, flatMap } from 'rxjs/operators';
import { differenceInDays, format, subMinutes } from 'date-fns';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { HeaderComponent } from '../header/header.component';
import { I_POST } from '@core/model';
import { Observable } from 'rxjs';
import { PostComponent } from '../post/post.component';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { SubSink } from 'subsink';

import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--calendar',
  styleUrls: ['./calendar.component.scss'],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements AfterViewInit, OnDestroy {
  @Input() calendarView: string;
  @ViewChild('calendar', { static: true }) calendar: FullCalendarComponent;

  private subscriptions$ = new SubSink();

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];

  private calendarApi: Calendar;

  header = {
    left: 'title',
    center: '',
    right: '',
  };
  slotLabelFormat = {
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: false,
    meridiem: 'long',
  };
  selectable = true;
  snapDuration = 15;
  eventLimit = false;
  allDaySlot = false;
  nowIndicator = true;
  columnHeader = {
    week: 'd',
  };
  eventOverlap = false;
  maxTime = '24:00:00';
  slotLabelInterval = {
    minutes: 2,
  };
  handleWindowResize = false;

  businessHours = false;
  calendarWeekends = true;
  displayPostTime = false;
  eventLimitClick = 'popover';
  fixedWeekCount = false;
  progressivePostRendering = false;
  slotDuration = '00:15:00';
  slotEventOverlap = true;

  get scrollTime(): string {
    return format(subMinutes(new Date(), 5), 'HH:mm:ss');
  }

  get calendarPosts(): Observable<I_POST[]> {
    const calendarPosts: Observable<I_POST[]> = this.activatedRoute.parent.paramMap.pipe(
      flatMap((params: ParamMap) => this.facade.getPostsByConnectionID(params.get('id'))),
    );

    return calendarPosts;
  }

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private facade: ScheduleFacade,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngAfterViewInit(): void {
    this.calendarApi = this.calendar.getApi();
    this.facade.setCalendarApi(this.calendarApi);

    this.subscriptions$.add(
      this.facade
        .isWeb()
        .pipe(delay(10))
        .subscribe(isWeb => {
          this.facade.setCalendarView(isWeb ? CALENDAR_VIEW.DAY_GRID_MONTH : CALENDAR_VIEW.TIME_GRID_DAY);
        }),
    );
  }

  private getBodyPortalHost(element: Element): DomPortalOutlet {
    return new DomPortalOutlet(element, this.componentFactoryResolver, this.applicationRef, this.injector);
  }

  handleDatesRender(): void {
    const toolbarHeader = document.querySelector('.fc-header-toolbar');
    const toolbarCenterSec = toolbarHeader.querySelector('.b-calendar-toolbar');
    if (!toolbarCenterSec) {
      const toolbarPortalHost = this.getBodyPortalHost(toolbarHeader);
      const componentToAppend = new ComponentPortal(HeaderComponent);
      toolbarPortalHost.attach(componentToAppend);
    }
  }

  handleDateClick(dateInfo: any): void {
    this.facade.handlePostCreateDialogOpen(dateInfo.start);
  }

  selectAllow(arg: any): boolean {
    return differenceInDays(new Date(), new Date(arg.start)) <= 0;
  }

  handlePostDrop(postInfo: I_POST): void {
    switch (differenceInDays(new Date(), new Date(postInfo.event.start)) <= 0) {
      case true:
        this.facade.handlePostDrag(postInfo);
        break;
      default:
        postInfo.revert();
        this.facade.openSnackbar('Post can not be rescheduled to past date.');
        break;
    }
  }

  handlePostRender(postInfo: I_POST): void {
    const element = postInfo.el.querySelector('.fc-content');
    postInfo.el.querySelector('.fc-title').remove();

    const postPortalHost = this.getBodyPortalHost(element);
    const componentToAppend = new ComponentPortal(PostComponent, null, this.createPostDataInjector(postInfo));
    postPortalHost.attach(componentToAppend);
  }

  private createPostDataInjector(postInfo: I_POST): PortalInjector {
    const injectorToken = new WeakMap();
    injectorToken.set(CALENDAR_POST_DATA, postInfo);
    return new PortalInjector(this.injector, injectorToken);
  }

  calendarToday() {
    this.facade.calendarToday();
  }

  calendarPrev() {
    this.facade.calendarPrev();
  }

  calendarNext() {
    this.facade.calendarNext();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
