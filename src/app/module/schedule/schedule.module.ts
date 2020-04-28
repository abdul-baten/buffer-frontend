import { CalendarSettingsModalModule } from '@shared/module/modal/calendar-settings-modal/calendar-settings-modal.module';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { EffectsModule } from '@ngrx/effects';
import { FullCalendarModule } from '@fullcalendar/angular';
import { KeyboardEventService } from '@core/service/keyboard-event/keyboard-event.service';
import { LayoutModule } from '@angular/cdk/layout';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { NotificationService } from '@core/service/notification/notification.service';
import { PostCreateModalModule } from '@shared/module/modal/post-create-modal/post-create-modal.module';
import { PostDeleteModalModule } from '@shared/module/modal/post-delete-modal/post-delete-modal.module';
import { PostDetailsModalModule } from '@shared/module/modal/post-details-modal/post-details-modal.module';
import { PostEditModalModule } from '@shared/module/modal/post-edit-modal/post-edit-modal.module';
import { PostRescheduleConfirmModalModule } from '@shared/module/modal/post-reschedule-confirm-modal/post-reschedule-confirm-modal.module';
import { PostRescheduleModalModule } from '@shared/module/modal/post-reschedule-modal/post-reschedule-modal.module';
import { reducer, schedulePostFeatureKey } from '@app/schedule/reducer/calendar.reducer';
import { ScheduleCalendarComponent } from '@app/schedule/components/schedule-calendar/schedule-calendar.component';
import { ScheduleCalendarOptionsComponent } from '@app/schedule/components/schedule-calendar-options/schedule-calendar-options.component';
import { ScheduleCalendarViewComponent } from '@app/schedule/components/schedule-calendar-view/schedule-calendar-view.component';
import { ScheduleCalendarViewHeaderButtonsComponent } from './components/schedule-calendar-view-header-buttons/schedule-calendar-view-header-buttons.component';
import { ScheduleCalendarViewPostComponent } from '@app/schedule/components/schedule-calendar-post/schedule-calendar-post.component';
import { ScheduleComponent } from '@app/schedule/container/schedule.component';
import { ScheduleDateSelectionComponent } from '@app/schedule/components/schedule-date-selection/schedule-date-selection.component';
import { ScheduleEffects } from '@app/schedule/effect/schedule.effects';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { ScheduleHeaderComponent } from '@app/schedule/components/schedule-header/schedule-header.component';
import { ScheduleRoutingModule } from '@app/schedule/schedule-routing.module';
import { ScheduleService } from '@core/service/schedule/schedule.service';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { SocialProfileToolbarModule } from '@shared/module/social-profile/social-profile-toolbar/social-profile-toolbar.module';
import { StoreModule } from '@ngrx/store';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

@NgModule({
  declarations: [
    ScheduleCalendarComponent,
    ScheduleCalendarOptionsComponent,
    ScheduleCalendarViewComponent,
    ScheduleCalendarViewHeaderButtonsComponent,
    ScheduleCalendarViewPostComponent,
    ScheduleComponent,
    ScheduleDateSelectionComponent,
    ScheduleHeaderComponent,
  ],
  imports: [
    CalendarSettingsModalModule,
    CommonModule,
    DashboardHeaderModule,
    FullCalendarModule,
    LayoutModule,
    LoaderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTooltipModule,
    PostCreateModalModule,
    PostDeleteModalModule,
    PostDetailsModalModule,
    PostEditModalModule,
    PostRescheduleConfirmModalModule,
    PostRescheduleModalModule,
    ScheduleRoutingModule,
    SocialProfileAddModule,
    SocialProfileToolbarModule,
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
    StoreModule.forFeature(schedulePostFeatureKey, reducer),
    EffectsModule.forFeature([ScheduleEffects]),
    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    }),
  ],
  providers: [DatePipe, KeyboardEventService, ScheduleFacade, ScheduleService, NotificationService],
  entryComponents: [ScheduleCalendarViewPostComponent, ScheduleCalendarViewHeaderButtonsComponent],
})
export class ScheduleModule {}
