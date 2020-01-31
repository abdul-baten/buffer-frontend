import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { Calendar } from '@fullcalendar/core';
import { CALENDAR_POST_DATA } from '@app/schedule/data/calendar-post.data';
import { CALENDAR_VIEW } from '@app/schedule/enum/calendar-view-options.enum';
import { CalPostInterface } from '@app/schedule/model/schedule.model';
import { ComponentPortal, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { delay } from 'rxjs/operators';
import { differenceInDays, format, subMinutes } from 'date-fns';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Observable, of } from 'rxjs';

import { ScheduleCalendarViewHeaderButtonsComponent } from '../schedule-calendar-view-header-buttons/schedule-calendar-view-header-buttons.component';
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
  ViewChild,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { SubSink } from 'subsink';
import { POST_TYPE } from '@core/enum/post/post-type.enum';
import { POST_STATUS } from '@core/enum/post/post-status.enum';

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
        postImages: [
          {
            fileURL: 'https://c5.patreon.com/external/marketing/index_page/patreon-hero-illustration.png',
            fileType: 'img',
            fileMimeType: '',
            fileName: 'patreon-hero-illustration.png',
            fileThumbnailURL: '',
          },
          {
            fileURL: 'https://c5.patreon.com/external/marketing/index_page/patreon-hero-illustration.png',
            fileType: 'img',
            fileMimeType: '',
            fileName: 'patreon-hero-illustration.jpg',
            fileThumbnailURL: '',
          },
        ],
        socialAccounts: [
          {
            socialId: '',
            socialAvatar:
              'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
            socialName: 'Facebook',
            socialType: '',
            socialURL: '',
          },
        ],
        postType: POST_TYPE.IMAGE,
        postStatus: POST_STATUS.SCHEDULED,
        postTime: '',
        postPermission: {
          postCanBeEdited: true,
          postCanNeDeleted: true,
        },
        postOriginalDate: '2020-01-07T20:30:00',
        postLocation: '',
        postLastEditedContent: '',
        postDate: '',
        postURL: '',
        postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        postCreateMember: '',
        postLastEditedDate: '',
        postLastEditedMember: '',
      },
      {
        id: '1001',
        title: 'Post Video',
        start: '2020-01-31T20:30:00',
        allDay: false,
        editable: true,
        overlap: true,
        hasEnd: false,
        postVideos: [
          {
            fileURL: 'https://www.videvo.net/videvo_files/converted/2017_12/preview/171124_B2_UHD_001.mp471291.webm',
            fileType: 'video',
            fileMimeType: '',
            fileName: 'patreon-hero-illustration.png',
            fileThumbnailURL: '',
          },
          {
            fileURL: 'https://www.videvo.net/videvo_files/converted/2013_07/preview/GirlinWaves.mov14897.webm',
            fileType: 'video',
            fileMimeType: '',
            fileName: 'patreon-hero-illustration.jpg',
            fileThumbnailURL: '',
          },
        ],
        socialAccounts: [
          {
            socialId: '',
            socialAvatar:
              'https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/401/352/preview/avatar.jpg?1551195863',
            socialName: 'Facebook',
            socialType: '',
            socialURL: '',
          },
        ],
        postType: POST_TYPE.VIDEO,
        postStatus: POST_STATUS.SCHEDULED,
        postTime: '',
        postPermission: {
          postCanBeEdited: true,
          postCanNeDeleted: true,
        },
        postOriginalDate: '2020-01-31T20:30:00',
        postLocation: '',
        postLastEditedContent: '',
        postDate: '',
        postURL: '',
        postCaption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        postCreateMember: '',
        postLastEditedDate: '',
        postLastEditedMember: '',
      },
    ]);
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

  handlePostDrop(postInfo: CalPostInterface) {
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

  handlePostRender(postInfo: CalPostInterface): void {
    const element = postInfo.el.querySelector('.fc-content');
    postInfo.el.querySelector('.fc-title').remove();

    const postPortalHost = this.getBodyPortalHost(element);
    const componentToAppend = new ComponentPortal(
      ScheduleCalendarViewPostComponent,
      null,
      this.createPostDataInjector(postInfo),
    );
    postPortalHost.attach(componentToAppend);
  }

  private createPostDataInjector(postInfo: CalPostInterface): PortalInjector {
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
