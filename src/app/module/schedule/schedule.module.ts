// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Application Specific Modules
import { ScheduleRoutingModule } from './schedule-routing.module';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';

// Third Party Modules
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

// Facades
import { ScheduleFacade } from './facade/schedule.facade';

// Services
import { PostTypeImageService } from './service/post-type-image.service';
import { PostTypeVideoService } from './service/post-type-video.service';
import { SnackbarService } from '@core/service/snackbar/snackbar.service';
import { ScheduleService } from '@core/service/schedule/schedule.service';
import { KeyboardEventService } from '@core/service/keyboard-event/keyboard-event.service';

// Components
import { ScheduleComponent } from './container/schedule.component';
import { ScheduleHeaderComponent } from './components/schedule-header/schedule-header.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleCalendarViewComponent } from './components/schedule-calendar-view/schedule-calendar-view.component';
import { ScheduleDateSelectionComponent } from './components/schedule-date-selection/schedule-date-selection.component';
import { ScheduleCalendarViewPostComponent } from './components/schedule-calendar-post/schedule-calendar-post.component';
import { SchedulePostViewModalComponent } from './components/schedule-post-view-modal/schedule-post-view-modal.component';
import { ScheduleAddPostButtonComponent } from './components/schedule-add-post-button/schedule-add-post-button.component';
import { ScheduleSocialAccountsComponent } from './components/schedule-social-accounts/schedule-social-accounts.component';
import { ScheduleCalendarOptionsComponent } from './components/schedule-calendar-options/schedule-calendar-options.component';
import { SchedulePostCreateModalComponent } from './components/schedule-post-create-modal/schedule-post-create-modal.component';
import { SchedulePostViewModalTimeComponent } from './components/schedule-post-view-time/schedule-post-view-modal-time.component';
import { SchedulePostViewModalImagesComponent } from './components/schedule-post-view-images/schedule-post-view-modal-images.component';
import { SchedulePostViewModalVideosComponent } from './components/schedule-post-view-videos/schedule-post-view-modal-videos.component';
import { SchedulePostViewModalFooterComponent } from './components/schedule-post-view-footer/schedule-post-view-modal-footer.component';
import { SchedulePostViewModalHeaderComponent } from './components/schedule-post-view-header/schedule-post-view-modal-header.component';
import { SchedulePostRescheduleModalComponent } from './components/schedule-post-reschedule-modal/schedule-post-reschedule-modal.component';
import { SchedulePostCreateModalFormComponent } from './components/schedule-post-create-modal-form/schedule-post-create-modal-form.component';
import { ScheduleCalendarSettingsModalComponent } from './components/schedule-calendar-settings-modal/schedule-calendar-settings-modal.component';
import { SchedulePostCreateModalFormTypeComponent } from './components/schedule-post-create-modal-form-type/schedule-post-create-modal-form-type.component';
import { SchedulePostCreateModalFormTextComponent } from './components/schedule-post-create-modal-form text/schedule-post-create-modal-form-text.component';
import { SchedulePostCreateModalFormImageComponent } from './components/schedule-post-create-modal-form-image/schedule-post-create-modal-form-image.component';
import { SchedulePostCreateModalFormVideoComponent } from './components/schedule-post-create-modal-form-video/schedule-post-create-modal-form-video.component';
import { SchedulePostCreateModalFormHeaderComponent } from './components/schedule-post-create-modal-form-header/schedule-post-create-modal-form-header.component';
import { SchedulePostCreateModalFormMediaSelectionComponent } from './components/schedule-post-create-modal-form-media-selection/schedule-post-create-modal-form-media-selection.component';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSchedulePostReducer from './reducer';
import { ScheduleEffects } from './effect/schedule.effects';

// import { LoggerService } from '@core/service/logger/logger.service';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleHeaderComponent,
    ScheduleCalendarComponent,
    ScheduleCalendarViewComponent,
    ScheduleAddPostButtonComponent,
    ScheduleDateSelectionComponent,
    SchedulePostViewModalComponent,
    ScheduleSocialAccountsComponent,
    ScheduleCalendarOptionsComponent,
    SchedulePostCreateModalComponent,
    SchedulePostCreateModalComponent,
    ScheduleCalendarViewPostComponent,
    SchedulePostViewModalTimeComponent,
    SchedulePostViewModalFooterComponent,
    SchedulePostViewModalHeaderComponent,
    SchedulePostViewModalImagesComponent,
    SchedulePostViewModalVideosComponent,
    SchedulePostCreateModalFormComponent,
    SchedulePostRescheduleModalComponent,
    ScheduleCalendarSettingsModalComponent,
    SchedulePostCreateModalFormTypeComponent,
    SchedulePostCreateModalFormTextComponent,
    SchedulePostCreateModalFormTextComponent,
    SchedulePostCreateModalFormImageComponent,
    SchedulePostCreateModalFormVideoComponent,
    SchedulePostCreateModalFormHeaderComponent,
    SchedulePostCreateModalFormMediaSelectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ScheduleRoutingModule,

    DashboardHeaderModule,

    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatRadioModule,
    MatRippleModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatTooltipModule,
    MatStepperModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,

    DropzoneModule,
    OwlDateTimeModule,
    FullCalendarModule,
    OwlNativeDateTimeModule,

    StoreModule.forFeature(fromSchedulePostReducer.schedulePostFeatureKey, fromSchedulePostReducer.reducer),
    EffectsModule.forFeature([ScheduleEffects])
  ],
  providers: [
    DatePipe,
    ScheduleFacade,
    ScheduleService,
    SnackbarService,
    PostTypeImageService,
    PostTypeVideoService,
    KeyboardEventService
  ],
  entryComponents: [
    SchedulePostCreateModalComponent,
    ScheduleCalendarViewPostComponent,
    SchedulePostRescheduleModalComponent,
    ScheduleCalendarSettingsModalComponent
  ]
})
export class ScheduleModule {}
