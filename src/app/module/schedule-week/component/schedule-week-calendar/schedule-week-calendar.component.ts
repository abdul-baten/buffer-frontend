// Core Module
import { Component } from '@angular/core';

// Third Party Module
import { CalendarEvent } from 'angular-calendar';
import { addHours, startOfDay, addDays } from 'date-fns';

// weekStartsOn option is ignored when using moment, as it needs to be configured globally for the moment locale

@Component({
  selector: 'buffer--schedule-week-calendar',
  templateUrl: './schedule-week-calendar.component.html',
  styleUrls: ['./schedule-week-calendar.component.scss']
})
export class ScheduleWeekCalendarComponent {
  viewDate: Date = new Date();

  // just for the purposes of the demo so it all fits in one screen

  events: CalendarEvent[] = [
    {
      title: 'Event 01',
      start: addHours(startOfDay(new Date()), 2)
    },
    {
      title: 'Event 02',
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
