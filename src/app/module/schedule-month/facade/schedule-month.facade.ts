// Core Modules
import { Injectable } from '@angular/core';

// Application Specific Modules

// Third Party Modules

// Services
import { ScheduleService } from '@core/service/schedule/schedule.service';

// Models
import { ICalendarEvent } from '@core/model/schedule/schedule.model';

@Injectable()
export class ScheduleMonthFacade {
  constructor(private scheduleService: ScheduleService) {}

  changeCalendarViewOption(viewOption: string) {
    this.scheduleService.changeCalendarViewOption(viewOption);
  }

  viewPostDetails(event: ICalendarEvent): void {
    this.scheduleService.viewPostDetails(event);
  }

  openCreatePostForm(eventDate: Date): void {
    this.scheduleService.openCreatePostForm(eventDate);
  }
}
