import { ButtonModule } from 'primeng/button';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HeaderComponent } from './components/header/header.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { NotificationService } from '@core/service/notification/notification.service';
import { PostComponent } from './components/post/post.component';
import { PostDetailsModalModule } from '@shared/module/modal/post-details-modal/post-details-modal.module';
import { PostModalModule } from '@shared/module/modal/post-modal/post-modal.module';
import { PostRescheduleConfirmModalModule } from '@shared/module/modal/post-reschedule-confirm-modal/post-reschedule-confirm-modal.module';
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
    CarouselModule,
    CommonModule,
    DashboardHeaderModule,
    EffectsModule.forFeature([ScheduleEffects]),
    FormsModule,
    FullCalendarModule,
    LazyLoadImageModule,
    MatDialogModule,
    PostDetailsModalModule,
    PostModalModule,
    PostRescheduleConfirmModalModule,
    ScheduleRoutingModule,
    SelectButtonModule,
    StoreModule.forFeature(schedulePostFeatureKey, reducer),
    ToolbarModule,
    TooltipModule,
  ],
  providers: [DatePipe, ScheduleFacade, ScheduleService, NotificationService],
  entryComponents: [PostComponent, HeaderComponent],
})
export class ScheduleModule {}
