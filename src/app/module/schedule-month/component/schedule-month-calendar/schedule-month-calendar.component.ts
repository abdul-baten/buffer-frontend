// Core Modules
import { Component } from '@angular/core';

// Third Party Modules
import { CalendarView } from 'angular-calendar';
import { addHours, startOfDay, addDays } from 'date-fns';

// Facades
import { ScheduleMonthFacade } from '../../facade/schedule-month.facade';

// Models
import { ICalendarEvent } from '@core/model/schedule/schedule.model';

@Component({
  selector: 'buffer--schedule-month-calendar',
  templateUrl: './schedule-month-calendar.component.html',
  styleUrls: ['./schedule-month-calendar.component.scss']
})
export class ScheduleMonthCalendarComponent {
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: ICalendarEvent[] = [
    {
      title: 'Event 01',
      imageUrls: [
        'https://www.workable.com/static/images/prefooter/prefooter-illu.webp',
        'https://c5.patreon.com/external/marketing/index_page/patreon-hero-illustration.png'
      ],
      socialAccounts: ['facebook'],
      start: addHours(startOfDay(new Date()), 2)
    },
    {
      title: 'Event 02',
      imageUrls: [],
      socialAccounts: ['facebook'],
      start: addHours(startOfDay(addDays(new Date('December 10, 2019'), 1)), 2)
    }
  ];

  constructor(private scheduleMonthFacade: ScheduleMonthFacade) {}

  onDayClicked(event: any): void {
    const {
      day: { date }
    } = event;

    this.scheduleMonthFacade.openCreatePostForm(date);
  }

  onScheduleMonthCalendarEventClicked(mouseEvent: MouseEvent, calEvent: ICalendarEvent): void {
    mouseEvent.preventDefault();
    mouseEvent.stopPropagation();

    this.scheduleMonthFacade.viewPostDetails(calEvent);
  }
}
