import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { Calendar, EventInput as CalPostInfoInterface } from '@fullcalendar/core';
import { CALENDAR_POST_DATA } from '@app/schedule/data/calendar-post.data';
import { CalPostInterface } from '@app/schedule/model/schedule.model';
import { ComponentPortal, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { differenceInDays, format, subMinutes } from 'date-fns';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Observable, of } from 'rxjs';
import { ScheduleCalendarViewPostComponent } from '../schedule-calendar-post/schedule-calendar-post.component';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  OnInit,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--schedule-calendar-view',
  styleUrls: ['./schedule-calendar-view.component.scss'],
  templateUrl: './schedule-calendar-view.component.html',
})
export class ScheduleCalendarViewComponent implements AfterViewInit, OnChanges, OnInit {
  @Input() calendarView: string;
  @ViewChild('calendar', { static: true }) calendar: FullCalendarComponent;

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];

  private calendarApi: Calendar;

  rates: any[];
  loading = false;
  error: any;

  header = {
    left: 'title',
    center: '',
    right: 'calendarSettingsButton',
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
  customButtons = {
    calendarSettingsButton: {
      text: 'Settings',
      click: () => {
        this.scheduleFacade.openCalenderSettings();
      },
    },
  };

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
    return format(subMinutes(new Date(), 5), 'HH:mm:ss');
  }

  get calendarPosts(): Observable<CalPostInterface[]> {
    return of([
      {
        id: '100',
        title: 'Post Now',
        start: '2020-01-07T20:30:00',
        allDay: false,
        editable: true,
        overlap: true,
        hasEnd: false,
        imageUrls: [
          {
            fileURL: 'https://c5.patreon.com/external/marketing/index_page/patreon-hero-illustration.png',
            fileType: 'img',
          },
        ],
        socialAccounts: ['facebook'],
        postType: 'image',
      },
      {
        id: '1001',
        title: 'Post Now 1',
        start: '2020-01-11T20:45:00',
        allDay: false,
        editable: true,
        overlap: true,
        hasEnd: false,
        videoUrls: [
          {
            fileURL: 'https://www.videvo.net/videvo_files/converted/2015_03/preview/BirdNoSound.mp480023.webm',
            fileType: 'video',
          },
        ],
        socialAccounts: ['facebook'],
        postType: 'video',
      },
    ]);
  }

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private scheduleFacade: ScheduleFacade
  ) {}

  ngAfterViewInit() {
    this.calendarApi = this.calendar.getApi();
    this.scheduleFacade.setCalendarApi(this.calendarApi);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.calendarView = changes.calendarView.currentValue;
  }

  handleDateClick(dateInfo: any) {
    this.scheduleFacade.openCreatePostForm(dateInfo.start);
  }

  selectAllow(arg: any): boolean {
    return differenceInDays(new Date(), new Date(arg.start)) <= 0;
  }

  handlePostDrop(postInfo: CalPostInfoInterface) {
    switch (differenceInDays(new Date(), new Date(postInfo.event.start)) <= 0) {
      case true:
        this.scheduleFacade.onPostDragged(postInfo);
        break;
      default:
        postInfo.revert();
        this.scheduleFacade.openSnackbar('Post can not be reschedule to past date');
        break;
    }
  }

  handlePostRender(eventInfo: CalPostInfoInterface): void {
    const element = eventInfo.el.querySelector('.fc-content');
    eventInfo.el.querySelector('.fc-title').remove();

    const bodyPortalHost = new DomPortalOutlet(
      element,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );
    const componentToAppend = new ComponentPortal(
      ScheduleCalendarViewPostComponent,
      null,
      this.createPostDataInjector(eventInfo)
    );
    bodyPortalHost.attach(componentToAppend);
  }

  private createPostDataInjector(eventInfo: CalPostInfoInterface): PortalInjector {
    const injectorToken = new WeakMap();
    injectorToken.set(CALENDAR_POST_DATA, eventInfo);
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

  ngOnInit() {
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //       {
    //         rates(currency: "USD") {
    //           currency
    //           rate
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe((result: any) => {
    //     this.rates = result.data && result.data.rates;
    //     this.loading = result.loading;
    //     this.error = result.error;
    //   });
  }

  handleLoading(): void {
    console.warn('============= console.warn starts =============');
    console.warn('loading');
    console.warn('============= console.warn ends =============');
    alert('aaaa');
    this.loading = true;
  }
}
