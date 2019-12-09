// Core Modules
import { Component } from '@angular/core';

// Third Party Modules
import { addHours, startOfDay, addDays } from 'date-fns';

// Models
import { ICalendarEvent } from '@core/model/schedule/schedule.model';

@Component({
  selector: 'buffer--schedule-week-calendar',
  templateUrl: './schedule-week-calendar.component.html',
  styleUrls: ['./schedule-week-calendar.component.scss']
})
export class ScheduleWeekCalendarComponent {
  viewDate: Date = new Date();

  events: ICalendarEvent[] = [
    {
      title: 'Event 01',
      imageUrls: [],
      socialAccounts: [],
      start: addHours(startOfDay(new Date()), 2)
    },
    {
      title: 'Event 02',
      imageUrls: [],
      socialAccounts: [],
      start: addHours(startOfDay(addDays(new Date('December 10, 2019'), 1)), 2)
    }
  ];

  clickedDate: Date;

  constructor() {}

  onDayClicked(event: any): void {
    console.warn('============= console.warn starts =============');
    console.warn('event', event.day);
    console.warn('============= console.warn ends =============');
  }

  alert(t: string): void {
    window.alert(t);
  }
}
