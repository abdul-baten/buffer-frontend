// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// Application Specific Modules
import { LoaderModule } from '@shared/module/loader/loader.module';
import { ScheduleRoutingModule } from '@app/schedule/schedule-routing.module';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';

// Third Party Modules
import { LayoutModule } from '@angular/cdk/layout';

import { FullCalendarModule } from '@fullcalendar/angular';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTooltipModule } from '@angular/material/tooltip';

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

import { ScheduleCalendarViewHeaderButtonsComponent } from './components/schedule-calendar-view-header-buttons/schedule-calendar-view-header-buttons.component';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromScheduleReducer from '@app/schedule/reducer';
import { ScheduleEffects } from '@app/schedule/effect/schedule.effects';
import { PostCreateModalModule } from '@shared/module/modal/post-create-modal/post-create-modal.module';
import { PostDetailsModalModule } from '@shared/module/modal/post-details-modal/post-details-modal.module';
import { PostDeleteModalModule } from '@shared/module/modal/post-delete-modal/post-delete-modal.module';
import { CalendarSettingsModalModule } from '@shared/module/modal/calendar-settings-modal/calendar-settings-modal.module';
import { PostRescheduleModalModule } from '@shared/module/modal/post-reschedule-modal/post-reschedule-modal.module';
import { PostRescheduleConfirmModalModule } from '@shared/module/modal/post-reschedule-confirm-modal/post-reschedule-confirm-modal.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

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
    ScheduleCalendarOptionsComponent,
    ScheduleCalendarViewPostComponent,
    ScheduleCalendarViewHeaderButtonsComponent,
  ],
  imports: [
    CommonModule,

    LoaderModule,
    ScheduleRoutingModule,

    DashboardHeaderModule,
    PostCreateModalModule,
    PostDetailsModalModule,
    PostDeleteModalModule,
    CalendarSettingsModalModule,
    PostRescheduleModalModule,
    PostRescheduleConfirmModalModule,

    LayoutModule,
    MatIconModule,
    MatMenuModule,

    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,

    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatButtonToggleModule,

    FullCalendarModule,

    StoreModule.forFeature(fromScheduleReducer.schedulePostFeatureKey, fromScheduleReducer.reducers),
    EffectsModule.forFeature([ScheduleEffects]),

    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    }),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
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
  entryComponents: [ScheduleCalendarViewPostComponent, ScheduleCalendarViewHeaderButtonsComponent],
})
export class ScheduleModule {}
