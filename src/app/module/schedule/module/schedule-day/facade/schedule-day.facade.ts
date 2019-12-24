// Core Module
import { Injectable } from '@angular/core';

// Application Specific
import { ScheduleService } from '@core/service/schedule/schedule.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDayFacade {
  constructor(private scheduleService: ScheduleService) {}

  changeCalendarViewOption(viewOption: string) {
    this.scheduleService.changeCalendarViewOption(viewOption);
  }
}
