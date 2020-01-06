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
import { POST_TYPE } from 'src/app/module/schedule/enum/schedule-event-create-modal.enum';

@Component({
  selector: 'buffer--schedule-calendar-view',
  templateUrl: './schedule-calendar-view.component.html',
  styleUrls: ['./schedule-calendar-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleCalendarViewComponent implements AfterViewInit, OnChanges {
  @Input() calendarView: string;
  @ViewChild('calendar', { static: true }) calendar: FullCalendarComponent;

  private calendarApi: any;

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
  columnHeader = true;
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
  displayEventTime = false;
  slotDuration = '00:15:00'; // TODO Settings
  showNonCurrentDates = true; // TODO Settings
  eventLimitClick = 'popover';
  progressiveEventRendering = false;

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];

  calendarEvents: Observable<CalPostInterface[]> = of([
    {
      id: '100',
      title: 'Event Now',
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
      socialAccounts: ['facebook']
    },
    {
      id: '100',
      title: 'Event Now 1',
      start: '2020-01-07T20:45:00',
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
      socialAccounts: ['facebook']
    }
  ]);

  constructor(private renderer: Renderer2, private scheduleFacade: ScheduleFacade) {}

  ngAfterViewInit() {
    this.calendarApi = this.calendar.getApi();
    this.scheduleFacade.setCalendarApi(this.calendarApi);
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
      this.appendMediaToElement(POST_TYPE.IMAGE, element);
    } else if (eventInfo.event.extendedProps.videoUrls) {
      this.appendMediaToElement(POST_TYPE.VIDEO, element);
    }
  }

  private appendMediaToElement(fileType: POST_TYPE, element: HTMLElement): void {
    const clearfixDiv: HTMLDivElement = this.createDivElement();

    const iconElem: HTMLMediaElement = this.renderer.createElement('i');
    iconElem.className = 'material-icons buffer--margin-2 buffer--font-size-xl';
    iconElem.innerText = fileType === POST_TYPE.IMAGE ? 'filter' : 'subscriptions';

    this.renderer.appendChild(clearfixDiv, iconElem);
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
