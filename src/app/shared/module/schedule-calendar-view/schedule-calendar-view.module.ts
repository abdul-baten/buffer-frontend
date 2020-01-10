// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FullCalendarModule } from '@fullcalendar/angular';

// Components
import { ScheduleCalendarViewComponent } from './container/schedule-calendar-view.component';
import { ScheduleCalendarViewEventComponent } from './components/schedule-calendar-view-event/schedule-calendar-view-event.component';

@NgModule({
  declarations: [ScheduleCalendarViewComponent, ScheduleCalendarViewEventComponent],
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule, FullCalendarModule],
  exports: [ScheduleCalendarViewComponent],
  entryComponents: [ScheduleCalendarViewEventComponent]
})
export class ScheduleCalendarViewModule {}
