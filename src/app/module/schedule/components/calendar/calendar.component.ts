import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { EventDropArg } from '@fullcalendar/interaction';
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
  ViewChild
} from '@angular/core';
import {
  Calendar,
  CalendarOptions,
  DateSelectArg,
  EventContentArg
} from '@fullcalendar/core';
import { CalendarPostData } from '../../data/calendar-post.data';
import { ComponentPortal, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { delay } from 'rxjs/operators';
import { differenceInDays, format, subMinutes } from 'date-fns';
import { ECalendarView } from 'src/app/core/enum';
import { HeaderComponent } from '../header/header.component';
import { PostComponent } from '../post/post.component';
import { Subscription } from 'rxjs';
/* eslint-disable @typescript-eslint/naming-convention */

import type { FullCalendarComponent } from '@fullcalendar/angular';
import type { IPost } from 'src/app/core/model';
import type { ScheduleFacade } from '../../facade/schedule.facade';

// eslint-disable-next-line no-unused-expressions
Calendar.name;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-calendar',
  styleUrls: ['./calendar.component.css'],
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() calendar_view = ECalendarView.DAY_GRID_MONTH;
  @Input() posts: any = [];
  @ViewChild('calendar') calendar!: FullCalendarComponent;

  private calendar_api!: Calendar;

  private subscription$ = new Subscription();

  calendar_options (): CalendarOptions {
    return {
      allDaySlot: false,
      businessHours: false,
      datesSet: () => {
        this.datesRendered();
      },
      dayHeaders: true,
      dayMaxEventRows: false,
      defaultAllDay: false,
      displayEventTime: false,
      eventBackgroundColor: 'white',
      eventBorderColor: 'transparent',
      eventDidMount: (post: EventContentArg) => {
        this.postRendered(post);
      },
      eventDisplay: 'block',
      eventDrop: (post_info: EventDropArg) => {
        this.postDropped(post_info);
      },
      eventOverlap: false,
      eventTextColor: '#000001',
      events: this.posts,
      fixedWeekCount: false,
      handleWindowResize: true,
      headerToolbar: {
        center: '',
        left: 'title',
        right: ''
      },
      initialView: this.calendar_view,
      lazyFetching: true,
      monthMode: false,
      moreLinkClick: 'popover',
      navLinkDayClick: (date) => {
        this.calendar_api.changeView(ECalendarView.TIME_GRID_DAY, date);
      },
      navLinks: true,
      nowIndicator: true,
      plugins: [dayGridPlugin, timeGrigPlugin, interactionPlugin],
      progressiveEventRendering: false,
      scrollTime: format(subMinutes(new Date(), parseInt('5', 10)), 'HH:mm:ss'),
      select: (date) => {
        this.dateClicked(date);
      },
      selectAllow: (post_info) => differenceInDays(new Date(), new Date(post_info.start as Date)) <= 0,
      selectable: true,
      slotDuration: '00:15:00',
      slotEventOverlap: false,
      slotLabelFormat: {
        hour: 'numeric',
        meridiem: 'short',
        minute: '2-digit',
        omitZeroMinute: false
      },
      slotLabelInterval: {
        minutes: 2
      },
      slotMaxTime: '24:00:00',
      slotMinWidth: 400,
      themeSystem: 'standard',
      weekends: true
    };
  }

  constructor (
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private facade: ScheduleFacade
  ) {}

  ngOnChanges (changes: SimpleChanges): void {
    this.calendar_options().events = changes.posts.currentValue;
  }

  ngAfterViewInit (): void {
    this.calendar_api = this.calendar.getApi();
    this.facade.setCalendarApi(this.calendar_api);

    this.subscription$.add(this.facade.
      isWeb().
      pipe(delay(parseInt('10', 10))).
      subscribe((is_platform_web: boolean) => {
        this.facade.setCalendarView(is_platform_web ? ECalendarView.DAY_GRID_MONTH : ECalendarView.TIME_GRID_DAY);
      }));
  }

  private getBodyPortalHost (element: Element): DomPortalOutlet {
    return new DomPortalOutlet(element, this.componentFactoryResolver, this.applicationRef, this.injector);
  }

  datesRendered (): void {
    const toolbar_header = this.facade.getQuerySelector('.fc-header-toolbar');
    const toolbar_center_sec = toolbar_header.querySelector('.b-calendar-toolbar');

    if (!toolbar_center_sec) {
      const toolbar_host = this.getBodyPortalHost(toolbar_header);
      const component_to_add = new ComponentPortal(HeaderComponent);

      toolbar_host.attach(component_to_add);
    }
  }

  dateClicked (date_time: DateSelectArg): void {
    this.facade.handlePostCreateDialogOpen(date_time.start as Date);
  }

  postDropped (post_info: EventDropArg): void {
    switch (differenceInDays(new Date(), new Date(post_info.event.start as Date)) <= 0) {
    case true:
      this.facade.handlePostDrag(post_info);
      break;
    default:
      this.facade.revertPost(post_info);
      break;
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  postRendered (post_info: any): void {
    const element = post_info.el.firstChild;
    const portal_host = this.getBodyPortalHost(element);
    const component_to_append = new ComponentPortal(PostComponent, null, this.createPostDataInjector(post_info));

    portal_host.attach(component_to_append);
  }

  private createPostDataInjector (post_info: IPost): PortalInjector {
    const injector_token = new WeakMap();

    injector_token.set(CalendarPostData, post_info);

    return new PortalInjector(this.injector, injector_token);
  }

  public calendarToday (): void {
    this.facade.calendarToday();
  }

  public calendarPrev (): void {
    this.facade.calendarPrev();
  }

  public calendarNext (): void {
    this.facade.calendarNext();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    this.subscription$.unsubscribe();
  }
}
