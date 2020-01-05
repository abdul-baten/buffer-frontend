// Core Modules
import {
  Component,
  ViewChild,
  Renderer2,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';

// Third Party Modules
import { Observable, of } from 'rxjs';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { differenceInDays, format } from 'date-fns';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';

// Facades
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';
import { CalPostInterface } from 'src/app/module/schedule/model/schedule.model';

@Component({
  selector: 'buffer--schedule-calendar-view',
  templateUrl: './schedule-calendar-view.component.html',
  styleUrls: ['./schedule-calendar-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleCalendarViewComponent implements AfterViewInit, OnChanges {
  private static calendarApi: any;

  @Input() calendarView: string;

  @ViewChild('calendar', { static: true }) calendar: FullCalendarComponent;

  header = {
    left: 'title',
    center: '',
    right: ''
  };
  slotLabelFormat = {
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: false,
    meridiem: 'long'
  };
  selectable = true;
  snapDuration = 15;
  eventLimit = false;
  allDaySlot = false;
  nowIndicator = true;
  columnHeader = true;
  eventOverlap = false;
  slotLabelInterval = {
    minutes: 2
  };
  businessHours = false;
  fixedWeekCount = false;
  calendarWeekends = true;
  slotEventOverlap = false;
  displayEventTime = false;
  slotDuration = '00:15:00';
  showNonCurrentDates = true;
  eventLimitClick = 'popover';
  progressiveEventRendering = false;

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];

  calendarEvents: Observable<CalPostInterface[]> = of([
    {
      id: '100',
      title: 'Event Now',
      start: '2020-01-02T13:30:00',
      allDay: false,
      editable: true,
      overlap: false,
      hasEnd: false,
      imageUrls: [
        {
          fileURL: 'https://c5.patreon.com/external/marketing/index_page/patreon-hero-illustration.png',
          fileType: 'img'
        }
      ],
      socialAccounts: ['facebook']
    }
  ]);

  static calendarToday() {
    ScheduleCalendarViewComponent.calendarApi.today();
  }

  static calendarPrev() {
    ScheduleCalendarViewComponent.calendarApi.prev();
  }

  static calendarNext() {
    ScheduleCalendarViewComponent.calendarApi.next();
  }

  constructor(private renderer: Renderer2, private scheduleFacade: ScheduleFacade) {}

  ngAfterViewInit() {
    ScheduleCalendarViewComponent.calendarApi = this.calendar.getApi();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.calendarView = changes.calendarView.currentValue;
  }

  handleDateClick(dateInfo: any) {
    dateInfo.jsEvent.preventDefault();
    this.scheduleFacade.openCreatePostForm(dateInfo.start);
  }

  selectAllow(arg: any): boolean {
    return differenceInDays(new Date(), new Date(arg.start)) <= 0;
  }

  handleEventDrop(postInfo: CalPostInfoInterface) {
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

  handleEventRender(eventInfo: CalPostInfoInterface): void {
    const element = eventInfo.el.querySelector('.fc-content');
    eventInfo.el.querySelector('.fc-title').remove();

    const clearfixDiv: HTMLDivElement = this.createDivElement();

    const titleSec: HTMLParagraphElement = this.renderer.createElement('p');
    titleSec.className = `
    buffer--width-full
    buffer--padding-x-2
    buffer--padding-top-2
    buffer--text-color-green-500
    buffer--font-family-semi-bold
    `;
    titleSec.innerText = `${eventInfo.event.title}`;

    const time = this.createDivElement();
    time.className = 'buffer--display-flex buffer--align-items-center buffer--padding-x-2 buffer--padding-bottom-2';
    const timeSec: HTMLParagraphElement = this.renderer.createElement('span');
    timeSec.className = 'buffer--font-size-xs buffer--margin-left-1';
    timeSec.innerText = format(eventInfo.event.start, 'p');

    const timeIconSec: HTMLElement = this.renderer.createElement('i');
    timeIconSec.className = `
    material-icons
    buffer--font-size-base
    `;
    timeIconSec.innerText = 'timer';

    this.renderer.appendChild(clearfixDiv, titleSec);
    this.renderer.appendChild(time, timeIconSec);
    this.renderer.appendChild(time, timeSec);
    this.renderer.appendChild(clearfixDiv, time);
    this.renderer.appendChild(element, clearfixDiv);

    if (eventInfo.event.extendedProps.imageUrls) {
      const { fileURL, fileType } = eventInfo.event.extendedProps.imageUrls[0];
      this.appendMediaToElement(fileURL, fileType, element);
    } else if (eventInfo.event.extendedProps.videoUrls) {
      const { fileURL, fileType } = eventInfo.event.extendedProps.videoUrls[0];
      this.appendMediaToElement(fileURL, fileType, element);
    }
  }

  private appendMediaToElement(mediaFileURL: string, mediaFileType: string, element: HTMLElement): void {
    const clearfixDiv: HTMLDivElement = this.createDivElement();

    const mediaElem: HTMLMediaElement = this.renderer.createElement(mediaFileType);
    mediaElem.className = 'buffer--width-full buffer--background-color-gray-100';
    mediaElem.src = `${mediaFileURL}`;
    mediaElem.controls = true;

    this.renderer.appendChild(clearfixDiv, mediaElem);
    this.renderer.appendChild(element, clearfixDiv);
  }

  private createDivElement(): HTMLDivElement {
    const div = this.renderer.createElement('div');
    div.className = 'clearfix';

    return div;
  }

  handleColumnHeaderText(date: Date): string {
    return format(date, 'EEE');
  }
}
