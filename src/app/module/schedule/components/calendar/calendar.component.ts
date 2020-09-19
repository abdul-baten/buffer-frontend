import { Calendar, CalendarOptions, EventContentArg } from '@fullcalendar/core';
import { CALENDAR_POST_DATA } from '@app/schedule/data/calendar-post.data';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { ComponentPortal, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { delay } from 'rxjs/operators';
import { differenceInDays, format, subMinutes } from 'date-fns';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { HeaderComponent } from '../header/header.component';
import { I_POST } from '@core/model';
import { PostComponent } from '../post/post.component';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { SubSink } from 'subsink';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGrigPlugin from '@fullcalendar/timegrid';

import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  HostListener,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

// tslint:disable-next-line
const name = Calendar.name;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--calendar',
  styleUrls: ['./calendar.component.scss'],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() posts: any = [];
  @Input() calendarView = CALENDAR_VIEW.DAY_GRID_MONTH;
  @ViewChild('calendar') calendar: FullCalendarComponent;

  private calendarApi: Calendar;
  private subscriptions$ = new SubSink();

  calendarOptions: CalendarOptions = {
    allDaySlot: false,
    businessHours: false,
    datesSet: () => {
      this.datesRendered();
    },
    dayHeaders: true,
    dayMaxEventRows: false,
    defaultAllDay: false,
    displayEventTime: false,
    eventOverlap: false,
    eventDidMount: (post: EventContentArg) => {
      this.postRendered(post);
    },
    events: this.posts,
    eventDisplay: 'block',
    eventBackgroundColor: 'white',
    eventBorderColor: 'transparent',
    eventTextColor: '#000001',
    fixedWeekCount: false,
    handleWindowResize: true,
    headerToolbar: {
      left: 'title',
      center: '',
      right: '',
    },
    initialView: this.calendarView,
    moreLinkClick: 'popover',
    navLinks: true,
    navLinkDayClick: (date) => {
      this.calendarApi.changeView(CALENDAR_VIEW.TIME_GRID_DAY, date);
    },
    nowIndicator: true,
    plugins: [dayGridPlugin, timeGrigPlugin, interactionPlugin],
    progressiveEventRendering: false,
    scrollTime: format(subMinutes(new Date(), 5), 'HH:mm:ss'),
    select: (date) => {
      this.dateClicked(date);
    },
    selectAllow: this.selectAllow,
    selectable: true,
    slotDuration: '00:15:00',
    slotEventOverlap: false,
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: false,
      meridiem: 'short',
    },
    slotLabelInterval: {
      minutes: 2,
    },
    slotMaxTime: '24:00:00',
    slotMinWidth: 400,
    themeSystem: 'standard',
    weekends: true,
    monthMode: false,
    lazyFetching: true,
  };

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private facade: ScheduleFacade,
  ) {
    console.warn(name);
    console.clear();
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calendarOptions.events = changes.posts.currentValue;
  }

  ngAfterViewInit(): void {
    this.calendarApi = this.calendar.getApi();
    this.facade.setCalendarApi(this.calendarApi);

    this.subscriptions$.add(
      this.facade
        .isWeb()
        .pipe(delay(10))
        .subscribe((isWeb) => {
          this.facade.setCalendarView(isWeb ? CALENDAR_VIEW.DAY_GRID_MONTH : CALENDAR_VIEW.TIME_GRID_DAY);
        }),
    );
  }

  private getBodyPortalHost(element: Element): DomPortalOutlet {
    return new DomPortalOutlet(element, this.componentFactoryResolver, this.applicationRef, this.injector);
  }

  datesRendered(): void {
    const toolbarHeader = document.querySelector('.fc-header-toolbar');
    const toolbarCenterSec = toolbarHeader.querySelector('.b-calendar-toolbar');
    if (!toolbarCenterSec) {
      const toolbarPortalHost = this.getBodyPortalHost(toolbarHeader);
      const componentToAppend = new ComponentPortal(HeaderComponent);
      toolbarPortalHost.attach(componentToAppend);
    }
  }

  dateClicked(dateInfo: any): void {
    this.facade.handlePostCreateDialogOpen(dateInfo.start);
  }

  selectAllow(arg: any): boolean {
    return differenceInDays(new Date(), new Date(arg.start)) <= 0;
  }

  postDropped(postInfo: I_POST): void {
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

  postRendered(postInfo: any): void {
    const element = postInfo.el.firstChild;

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
