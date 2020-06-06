import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { Calendar } from '@fullcalendar/core';
import { CALENDAR_POST_DATA } from '@app/schedule/data/calendar-post.data';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { ComponentPortal, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { delay } from 'rxjs/operators';
import { differenceInDays, format, subMinutes } from 'date-fns';
import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { I_POST } from '@core/model';
import { Observable, of } from 'rxjs';
import { ScheduleCalendarViewHeaderButtonsComponent } from '../schedule-calendar-view-header-buttons/schedule-calendar-view-header-buttons.component';
import { ScheduleCalendarViewPostComponent } from '../schedule-calendar-post/schedule-calendar-post.component';
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
  selector: 'buffer--schedule-calendar-view',
  styleUrls: ['./schedule-calendar-view.component.scss'],
  templateUrl: './schedule-calendar-view.component.html',
})
export class ScheduleCalendarViewComponent implements AfterViewInit, OnDestroy {
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

  get firstDay(): Observable<number> {
    return this.scheduleFacade.getCalendarFirstDay();
  }

  get showNonCurrentDates(): Observable<boolean> {
    return this.scheduleFacade.getCalendarNonCurrentDates();
  }

  businessHours = false;
  calendarWeekends = true;
  displayPostTime = false;
  eventLimitClick = 'popover';
  fixedWeekCount = false;
  progressivePostRendering = false;
  slotDuration = '00:15:00';
  slotEventOverlap = true;

  get scrollTime(): string {
    // return format(roundToNearestMinutes(new Date(), { nearestTo: 30 }), 'HH:mm:ss');
    return format(subMinutes(new Date(), 5), 'HH:mm:ss');
  }

  get calendarPosts(): Observable<I_POST[]> {
    const calendarPosts: Observable<I_POST[]> = of([
      {
        id: '100',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        start: '2020-01-07T20:30:00',
        allDay: false,
        editable: true,
        overlap: true,
        hasEnd: false,
        postMedia: [
          {
            id: '',
            mediaMimeType: '',
            mediaName: 'patreon-hero-illustration.png',
            mediaType: 'img',
            mediaURL: '',
          },
        ],
        postConnection: '',
        postType: E_POST_TYPE.IMAGE,
        postStatus: E_POST_STATUS.SCHEDULED,
        postScheduleTime: '',
        postScheduleDate: new Date().toDateString(),
        postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        userID: '',
      },
    ]);

    return calendarPosts;
  }

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private scheduleFacade: ScheduleFacade,
  ) {}

  ngAfterViewInit() {
    this.calendarApi = this.calendar.getApi();
    this.scheduleFacade.setCalendarApi(this.calendarApi);

    this.subscriptions$.add(
      this.scheduleFacade
        .isWeb()
        .pipe(delay(10))
        .subscribe(isWeb => {
          this.scheduleFacade.setCalendarView(isWeb ? CALENDAR_VIEW.DAY_GRID_MONTH : CALENDAR_VIEW.TIME_GRID_DAY);
        }),
    );
  }

  handleDatesRender(): void {
    const toolbarHeader = document.querySelector('.fc-header-toolbar');
    const toolbarCenterSec = toolbarHeader.querySelector('.buffer--calendar-toolbar');
    if (!toolbarCenterSec) {
      const toolbarPortalHost = this.getBodyPortalHost(toolbarHeader);
      const componentToAppend = new ComponentPortal(ScheduleCalendarViewHeaderButtonsComponent);
      toolbarPortalHost.attach(componentToAppend);
    }
  }

  private getBodyPortalHost(element: Element): DomPortalOutlet {
    return new DomPortalOutlet(element, this.componentFactoryResolver, this.applicationRef, this.injector);
  }

  handleDateClick(dateInfo: any) {
    this.scheduleFacade.handlePostCreateDialogOpen(dateInfo.start);
  }

  selectAllow(arg: any): boolean {
    return differenceInDays(new Date(), new Date(arg.start)) <= 0;
  }

  handlePostDrop(postInfo: I_POST) {
    switch (differenceInDays(new Date(), new Date(postInfo.event.start)) <= 0) {
      case true:
        this.scheduleFacade.handlePostDrag(postInfo);
        break;
      default:
        postInfo.revert();
        this.scheduleFacade.openSnackbar('Post can not be rescheduled to past date.');
        break;
    }
  }

  handlePostRender(postInfo: I_POST): void {
    const element = postInfo.el.querySelector('.fc-content');
    postInfo.el.querySelector('.fc-title').remove();

    const postPortalHost = this.getBodyPortalHost(element);
    const componentToAppend = new ComponentPortal(ScheduleCalendarViewPostComponent, null, this.createPostDataInjector(postInfo));
    postPortalHost.attach(componentToAppend);
  }

  private createPostDataInjector(postInfo: I_POST): PortalInjector {
    const injectorToken = new WeakMap();
    injectorToken.set(CALENDAR_POST_DATA, postInfo);
    return new PortalInjector(this.injector, injectorToken);
  }

  calendarToday() {
    this.scheduleFacade.calendarToday();
  }

  calendarPrev() {
    this.scheduleFacade.calendarPrev();
  }

  calendarNext() {
    this.scheduleFacade.calendarNext();
  }

  handleLoading(isLoading: boolean): void {
    alert(isLoading);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
