// Core Module
import { Component } from '@angular/core';

// Third Party Module
import * as moment from 'moment';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'buffer--schedule-month-calendar-options',
  templateUrl: './schedule-month-calendar-options.component.html',
  styleUrls: ['./schedule-month-calendar-options.component.scss']
})
export class ScheduleMonthCalendarOptionsComponent {
  presentDate = moment().format('dddd, MMMM DD');
  selected = 'month';

  calendarSelected(a: MatButtonToggleChange): void {
    console.warn('============= console.warn starts =============');
    console.warn('', a.value);
    console.warn('============= console.warn ends =============');
  }
}
