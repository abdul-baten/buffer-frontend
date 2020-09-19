import { ButtonModule } from 'primeng/button';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardModule } from 'primeng/card';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HeaderComponent } from './components/header/header.component';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { NotificationService } from '@core/service/notification/notification.service';
import { PostComponent } from './components/post/post.component';
import { PostDeleteModalModule } from '@shared/module/modal/post-delete-modal/post-delete-modal.module';
import { PostDetailsModalModule } from '@shared/module/modal/post-details-modal/post-details-modal.module';
import { PostModalModule } from '@shared/module/modal/post-modal/post-modal.module';
import { PostRescheduleConfirmModalModule } from '@shared/module/modal/post-reschedule-confirm-modal/post-reschedule-confirm-modal.module';
import { PostRescheduleModalModule } from '@shared/module/modal/post-reschedule-modal/post-reschedule-modal.module';
import { reducer, schedulePostFeatureKey } from '@app/schedule/reducer/calendar.reducer';
import { ScheduleComponent } from '@app/schedule/container/schedule.component';
import { ScheduleEffects } from '@app/schedule/effect/schedule.effects';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';
import { ScheduleRoutingModule } from '@app/schedule/schedule-routing.module';
import { ScheduleService } from '@core/service/schedule/schedule.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StoreModule } from '@ngrx/store';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [CalendarComponent, HeaderComponent, PostComponent, ScheduleComponent],
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    DashboardHeaderModule,
    FormsModule,
    FullCalendarModule,
    MatDialogModule,
    MatNativeDateModule,
    PostDeleteModalModule,
    PostDetailsModalModule,
    PostModalModule,
    PostRescheduleConfirmModalModule,
    PostRescheduleModalModule,
    ScheduleRoutingModule,
    SelectButtonModule,
    ToolbarModule,
    TooltipModule,
    StoreModule.forFeature(schedulePostFeatureKey, reducer),
    EffectsModule.forFeature([ScheduleEffects]),
    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    }),
  ],
  providers: [DatePipe, ScheduleFacade, ScheduleService, NotificationService],
  entryComponents: [PostComponent, HeaderComponent],
})
export class ScheduleModule {}
