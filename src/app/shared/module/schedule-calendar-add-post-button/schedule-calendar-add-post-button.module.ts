// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Modules
import { MatButtonModule } from '@angular/material/button';

// Facades
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

// Components
import { ScheduleCalendarAddPostButtonComponent } from './container/schedule-calendar-add-post-button.component';

@NgModule({
  declarations: [ScheduleCalendarAddPostButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ScheduleCalendarAddPostButtonComponent],
  providers: [ScheduleFacade]
})
export class ScheduleCalendarAddPostButtonModule {}
