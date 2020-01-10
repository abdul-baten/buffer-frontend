// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// Application Specific Modules
import { ScheduleRoutingModule } from './schedule-routing.module';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { ScheduleEventViewModalModule } from './module/modal/schedule-event-view-modal/schedule-event-view-modal.module';
import { ScheduleEventDragModalModule } from './module/modal/schedule-event-drag-modal/schedule-event-drag-modal.module';
import { ScheduleEventCreateModalModule } from './module/modal/schedule-event-create-modal/schedule-event-create-modal.module';
import { ScheduleCalendarSettingsModalModule } from './module/modal/schedule-calendar-settings-modal/schedule-calendar-settings-modal.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

// Facades
import { ScheduleFacade } from './facade/schedule.facade';

// Services
import { PostTypeImageService } from './service/post-type-image.service';
import { PostTypeVideoService } from './service/post-type-video.service';
import { SnackbarService } from '@core/service/snackbar/snackbar.service';
import { ScheduleService } from '@core/service/schedule/schedule.service';

// Components
import { ScheduleComponent } from './container/schedule.component';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSchedulePostReducer from './reducer';
import { ScheduleEffects } from './effect/schedule.effects';

// import { LoggerService } from '@core/service/logger/logger.service';
@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,

    DashboardHeaderModule,

    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatBottomSheetModule,

    ScheduleEventViewModalModule,
    ScheduleEventDragModalModule,
    ScheduleEventCreateModalModule,
    ScheduleCalendarSettingsModalModule,

    StoreModule.forFeature(fromSchedulePostReducer.schedulePostFeatureKey, fromSchedulePostReducer.reducer),

    EffectsModule.forFeature([ScheduleEffects])
  ],
  providers: [ScheduleFacade, ScheduleService, DatePipe, PostTypeImageService, PostTypeVideoService, SnackbarService]
})
export class ScheduleModule {}
