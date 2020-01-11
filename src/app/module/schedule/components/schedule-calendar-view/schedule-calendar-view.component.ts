// Core Modules
import {
  Input,
  Injector,
  Component,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  ComponentFactoryResolver
} from '@angular/core';
import { DomPortalOutlet, PortalInjector, ComponentPortal } from '@angular/cdk/portal';

// Third Party Modules
import { Observable, of } from 'rxjs';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { differenceInDays, format, subMinutes } from 'date-fns';

// Facades
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Models
import { CalPostInterface } from 'src/app/module/schedule/model/schedule.model';
import { EventInput as CalPostInfoInterface, Calendar } from '@fullcalendar/core';

// Data
import { CALENDAR_POST_DATA } from 'src/app/module/schedule/data/calendar-post.data';

// Component
import { ScheduleCalendarViewPostComponent } from '../schedule-calendar-post/schedule-calendar-post.component';

@Component({
  selector: 'buffer--schedule-calendar-view',
  templateUrl: './schedule-calendar-view.component.html',
  styleUrls: ['./schedule-calendar-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleCalendarViewComponent implements AfterViewInit, OnChanges {
  @Input() calendarView: string;
  @ViewChild('calendar', { static: true }) calendar: FullCalendarComponent;

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];

  private calendarApi: Calendar;

  header = {
    left: 'title',
    center: '',
    right: 'calendarSettingsButton'
  };
  slotLabelFormat = {
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: false,
    meridiem: 'long'
  };
  selectable = true;
  snapDuration = 15;
  eventLimit = false; // TODO Settings
  allDaySlot = false;
  nowIndicator = true;
  columnHeader = {
    week: 'd'
  };
  eventOverlap = false;
  maxTime = '24:00:00';
  slotLabelInterval = {
    minutes: 2
  };
  customButtons = {
    calendarSettingsButton: {
      text: 'Settings',
      click: () => {
        this.scheduleFacade.openCalenderSettings();
      }
    }
  };

  businessHours = false; // TODO Settings
  fixedWeekCount = false; // TODO Settings
  calendarWeekends = true; // TODO Settings
  slotEventOverlap = true;
  displayPostTime = false;
  slotDuration = '00:15:00'; // TODO Settings
  showNonCurrentDates = true; // TODO Settings
  eventLimitClick = 'popover';
  progressivePostRendering = false;

  scrollTime = format(subMinutes(new Date(), 5), 'HH:mm:ss');

  // https://fullcalendar.io/docs/date-formatting
  titleFormat = {
    // month: 'long',
    // year: 'numeric',
    // day: '2-digit',
    // week: 'long',
    // meridiem: '',
    // omitZeroMinute: false,
    // omitCommas: true
  };

  calendarPosts: Observable<CalPostInterface[]> = of([
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
          fileType: 'img'
        }
      ],
      socialAccounts: ['facebook'],
      postType: 'image'
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
          fileType: 'video'
        }
      ],
      socialAccounts: ['facebook'],
      postType: 'video'
    }
  ]);

  constructor(
    private injector: Injector,
    private scheduleFacade: ScheduleFacade,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
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
        this.scheduleFacade.openSnackbar('Post can not be reschedule to past date', 'Ok');
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
}
