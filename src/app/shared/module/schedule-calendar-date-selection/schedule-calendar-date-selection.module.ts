// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Modules
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

// Components
import { ScheduleCalendarDateSelectionComponent } from './container/schedule-calendar-date-selection.component';

@NgModule({
  declarations: [ScheduleCalendarDateSelectionComponent],
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule],
  exports: [ScheduleCalendarDateSelectionComponent]
})
export class ScheduleCalendarDateSelectionModule {}
