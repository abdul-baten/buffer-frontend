// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Application Specific Modules
import { LoaderModule } from '@shared/module/loader/loader.module';
import { ScheduleRoutingModule } from '@app/schedule/schedule-routing.module';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';

// Third Party Modules
import { LayoutModule } from '@angular/cdk/layout';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

// Services
import { SnackbarService } from '@core/service/snackbar/snackbar.service';
import { ScheduleService } from '@core/service/schedule/schedule.service';
import { PostTypeImageService } from '@app/schedule/service/post-type-image.service';
import { PostTypeVideoService } from '@app/schedule/service/post-type-video.service';
import { KeyboardEventService } from '@core/service/keyboard-event/keyboard-event.service';

// Components
import { ScheduleComponent } from '@app/schedule/container/schedule.component';
import { ScheduleHeaderComponent } from '@app/schedule/components/schedule-header/schedule-header.component';
import { ScheduleCalendarComponent } from '@app/schedule/components/schedule-calendar/schedule-calendar.component';
import { ScheduleSocialAccountsComponent } from './components/schedule-social-accounts/schedule-social-accounts.component';
import { ScheduleCalendarViewComponent } from '@app/schedule/components/schedule-calendar-view/schedule-calendar-view.component';
import { ScheduleDateSelectionComponent } from '@app/schedule/components/schedule-date-selection/schedule-date-selection.component';
import { ScheduleCalendarViewPostComponent } from '@app/schedule/components/schedule-calendar-post/schedule-calendar-post.component';
import { ScheduleAddPostButtonComponent } from '@app/schedule/components/schedule-add-post-button/schedule-add-post-button.component';
import { ScheduleCalendarOptionsComponent } from '@app/schedule/components/schedule-calendar-options/schedule-calendar-options.component';
import { ScheduleDeletePostModalComponent } from '@app/schedule/components/schedule-delete-post-modal/schedule-delete-post-modal.component';
import { SchedulePostCreateModalComponent } from '@app/schedule/components/schedule-post-create-modal/schedule-post-create-modal.component';
import { SchedulePostViewModalTimeComponent } from '@app/schedule/components/schedule-post-view-time/schedule-post-view-modal-time.component';
import { SchedulePostViewModalImagesComponent } from '@app/schedule/components/schedule-post-view-images/schedule-post-view-modal-images.component';
import { SchedulePostViewModalVideosComponent } from '@app/schedule/components/schedule-post-view-videos/schedule-post-view-modal-videos.component';
import { SchedulePostViewModalFooterComponent } from '@app/schedule/components/schedule-post-view-footer/schedule-post-view-modal-footer.component';
import { SchedulePostRescheduleModalComponent } from '@app/schedule/components/schedule-post-reschedule-modal/schedule-post-reschedule-modal.component';
import { SchedulePostCreateModalFormComponent } from '@app/schedule/components/schedule-post-create-modal-form/schedule-post-create-modal-form.component';
import { ScheduleCalendarPostDetailsModalComponent } from './components/schedule-calendar-post-details-modal/schedule-calendar-post-details-modal.component';
import { ScheduleCalendarSettingsModalComponent } from '@app/schedule/components/schedule-calendar-settings-modal/schedule-calendar-settings-modal.component';
import { ScheduleCalendarViewHeaderButtonsComponent } from './components/schedule-calendar-view-header-buttons/schedule-calendar-view-header-buttons.component';
import { SchedulePostCreateModalFormTypeComponent } from '@app/schedule/components/schedule-post-create-modal-form-type/schedule-post-create-modal-form-type.component';
import { SchedulePostCreateModalFormTextComponent } from '@app/schedule/components/schedule-post-create-modal-form text/schedule-post-create-modal-form-text.component';
import { SchedulePostCreateModalFormImageComponent } from '@app/schedule/components/schedule-post-create-modal-form-image/schedule-post-create-modal-form-image.component';
import { SchedulePostCreateModalFormVideoComponent } from '@app/schedule/components/schedule-post-create-modal-form-video/schedule-post-create-modal-form-video.component';
import { ScheduleCalendarSettingsModalFormComponent } from '@app/schedule/components/schedule-calendar-settings-modal-form/schedule-calendar-settings-modal-form.component';
import { SchedulePostCreateModalFormHeaderComponent } from '@app/schedule/components/schedule-post-create-modal-form-header/schedule-post-create-modal-form-header.component';
import { SchedulePostRescheduleConfirmModalComponent } from '@app/schedule/components/schedule-post-reschedule-confirm-modal/schedule-post-reschedule-confirm-modal.component';
import { SchedulePostCreateModalFormMediaSelectionComponent } from '@app/schedule/components/schedule-post-create-modal-form-media-selection/schedule-post-create-modal-form-media-selection.component';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromScheduleReducer from '@app/schedule/reducer';
import { ScheduleEffects } from '@app/schedule/effect/schedule.effects';

// import { LoggerService } from '@core/service/logger/logger.service';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleHeaderComponent,
    ScheduleCalendarComponent,
    ScheduleCalendarViewComponent,
    ScheduleAddPostButtonComponent,
    ScheduleDateSelectionComponent,
    ScheduleSocialAccountsComponent,
    ScheduleDeletePostModalComponent,
    ScheduleCalendarOptionsComponent,
    SchedulePostCreateModalComponent,
    SchedulePostCreateModalComponent,
    ScheduleCalendarViewPostComponent,
    SchedulePostViewModalTimeComponent,
    SchedulePostViewModalFooterComponent,
    SchedulePostViewModalImagesComponent,
    SchedulePostViewModalVideosComponent,
    SchedulePostCreateModalFormComponent,
    SchedulePostRescheduleModalComponent,
    ScheduleCalendarSettingsModalComponent,
    SchedulePostCreateModalFormTypeComponent,
    SchedulePostCreateModalFormTextComponent,
    SchedulePostCreateModalFormTextComponent,
    SchedulePostCreateModalFormImageComponent,
    ScheduleCalendarPostDetailsModalComponent,
    SchedulePostCreateModalFormVideoComponent,
    SchedulePostCreateModalFormHeaderComponent,
    ScheduleCalendarSettingsModalFormComponent,
    ScheduleCalendarViewHeaderButtonsComponent,
    SchedulePostRescheduleConfirmModalComponent,
    SchedulePostCreateModalFormMediaSelectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    LoaderModule,
    ScheduleRoutingModule,

    DashboardHeaderModule,

    LayoutModule,
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

    SlickCarouselModule,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,

    DropzoneModule,
    OwlDateTimeModule,
    FullCalendarModule,
    OwlNativeDateTimeModule,

    StoreModule.forFeature(fromScheduleReducer.schedulePostFeatureKey, fromScheduleReducer.reducers),
    EffectsModule.forFeature([ScheduleEffects]),

    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    }),
  ],
  providers: [
    DatePipe,
    ScheduleFacade,
    ScheduleService,
    SnackbarService,
    PostTypeImageService,
    PostTypeVideoService,
    KeyboardEventService,
  ],
  entryComponents: [
    ScheduleDeletePostModalComponent,
    SchedulePostCreateModalComponent,
    ScheduleCalendarViewPostComponent,
    SchedulePostRescheduleModalComponent,
    ScheduleCalendarSettingsModalComponent,
    ScheduleCalendarPostDetailsModalComponent,
    ScheduleCalendarViewHeaderButtonsComponent,
    SchedulePostRescheduleConfirmModalComponent,
  ],
})
export class ScheduleModule {}
