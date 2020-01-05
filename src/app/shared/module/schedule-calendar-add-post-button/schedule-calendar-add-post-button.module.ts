// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Modules
import { MatButtonModule } from '@angular/material/button';

// Components
import { ScheduleCalendarAddPostButtonComponent } from './container/schedule-calendar-add-post-button.component';

@NgModule({
  declarations: [ScheduleCalendarAddPostButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ScheduleCalendarAddPostButtonComponent]
})
export class ScheduleCalendarAddPostButtonModule {}
