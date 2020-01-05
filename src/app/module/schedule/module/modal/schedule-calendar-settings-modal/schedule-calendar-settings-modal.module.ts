// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Third Party Modules
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { ScheduleCalendarSettingsModalComponent } from './container/schedule-calendar-settings-modal.component';

@NgModule({
  declarations: [ScheduleCalendarSettingsModalComponent],
  imports: [
    // Core Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Modules
    MatRadioModule,
    MatDialogModule
  ],
  exports: [ScheduleCalendarSettingsModalComponent],
  entryComponents: [ScheduleCalendarSettingsModalComponent]
})
export class ScheduleCalendarSettingsModalModule {}
