// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// Components
import { ScheduleEventDragModalComponent } from './container/schedule-event-drag-modal.component';

@NgModule({
  declarations: [ScheduleEventDragModalComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule],
  exports: [ScheduleEventDragModalComponent],
  entryComponents: [ScheduleEventDragModalComponent]
})
export class ScheduleEventDragModalModule {}
