// Core Module
import { Component } from '@angular/core';

// Third Party Module
import * as moment from 'moment';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'buffer--schedule-day-calendar-options',
  templateUrl: './schedule-day-calendar-options.component.html',
  styleUrls: ['./schedule-day-calendar-options.component.scss']
})
export class ScheduleDayCalendarOptionsComponent {
  presentDate = moment().format('dddd, MMMM DD');
  selected = 'day';

  calendarSelected(a: MatButtonToggleChange): void {
    console.warn('============= console.warn starts =============');
    console.warn('', a.value);
    console.warn('============= console.warn ends =============');
  }
}
