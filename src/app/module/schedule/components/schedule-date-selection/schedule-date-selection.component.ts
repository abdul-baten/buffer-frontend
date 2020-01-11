// Core Modules
import { Component } from '@angular/core';

// Facades
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-date-selection',
  templateUrl: './schedule-date-selection.component.html',
  styleUrls: ['./schedule-date-selection.component.scss']
})
export class ScheduleDateSelectionComponent {
  currentDate: Date = new Date();

  constructor(private scheduleFacade: ScheduleFacade) {}

  onSelect(date: Date) {
    this.currentDate = date;
    this.scheduleFacade.calendarDate(date);
  }
}
