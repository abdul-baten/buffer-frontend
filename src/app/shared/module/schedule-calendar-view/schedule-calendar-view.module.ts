// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Modules
import { FullCalendarModule } from '@fullcalendar/angular';

// Components
import { ScheduleCalendarViewComponent } from './container/schedule-calendar-view.component';

@NgModule({
  declarations: [ScheduleCalendarViewComponent],
  imports: [CommonModule, FullCalendarModule],
  exports: [ScheduleCalendarViewComponent]
})
export class ScheduleCalendarViewModule {}
