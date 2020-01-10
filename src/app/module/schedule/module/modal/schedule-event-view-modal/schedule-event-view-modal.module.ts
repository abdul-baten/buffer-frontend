// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

// Components
import { ScheduleEventViewModalComponent } from './container/schedule-event-view-modal.component';
import { ScheduleEventViewModalTimeComponent } from './component/schedule-event-view-time/schedule-event-view-modal-time.component';
import { ScheduleEventViewModalHeaderComponent } from './component/schedule-event-view-header/schedule-event-view-modal-header.component';
import { ScheduleEventViewModalFooterComponent } from './component/schedule-event-view-footer/schedule-event-view-modal-footer.component';
import { ScheduleEventViewModalImagesComponent } from './component/schedule-event-view-images/schedule-event-view-modal-images.component';
import { ScheduleEventViewModalVideosComponent } from './component/schedule-event-view-videos/schedule-event-view-modal-videos.component';

@NgModule({
  declarations: [
    ScheduleEventViewModalComponent,
    ScheduleEventViewModalTimeComponent,
    ScheduleEventViewModalVideosComponent,
    ScheduleEventViewModalImagesComponent,
    ScheduleEventViewModalHeaderComponent,
    ScheduleEventViewModalFooterComponent
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, MatBottomSheetModule],
  exports: [ScheduleEventViewModalComponent],
  entryComponents: [ScheduleEventViewModalComponent]
})
export class ScheduleEventViewModalModule {}
