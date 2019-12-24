// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// Application Specific Modules
import { ScheduleRoutingModule } from './schedule-routing.module';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { ScheduleEventViewModalModule } from './module/modal/schedule-event-view-modal/schedule-event-view-modal.module';
import { ScheduleEventCreateModalModule } from './module/modal/schedule-event-create-modal/schedule-event-create-modal.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

// Facades
import { ScheduleFacade } from './facade/schedule.facade';

// Services
import { ScheduleService } from '@core/service/schedule/schedule.service';
import { PostTypeImageService } from './service/post-type-image.service';
import { PostTypeVideoService } from './service/post-type-video.service';

// Components
import { ScheduleComponent } from './container/schedule.component';

// Store
import { StoreModule } from '@ngrx/store';
import * as fromSchedulePostReducer from './reducer';
@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,

    DashboardHeaderModule,

    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatBottomSheetModule,

    ScheduleEventViewModalModule,
    ScheduleEventCreateModalModule,

    StoreModule.forFeature(fromSchedulePostReducer.schedulePostFeatureKey, fromSchedulePostReducer.reducer)
  ],
  providers: [ScheduleFacade, ScheduleService, DatePipe, PostTypeImageService, PostTypeVideoService]
})
export class ScheduleModule {}
