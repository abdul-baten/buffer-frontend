// Core Module
import { Component } from '@angular/core';

// Third Party Module
import * as moment from 'moment';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'buffer--schedule-week-calendar-options',
  templateUrl: './schedule-week-calendar-options.component.html',
  styleUrls: ['./schedule-week-calendar-options.component.scss']
})
export class ScheduleWeekCalendarOptionsComponent {
  presentDate = moment().format('dddd, MMMM DD');
  selected = 'week';

  calendarSelected(a: MatButtonToggleChange): void {
    console.warn('============= console.warn starts =============');
    console.warn('', a.value);
    console.warn('============= console.warn ends =============');
  }

  onPreviousWeekClicked() {}
}
