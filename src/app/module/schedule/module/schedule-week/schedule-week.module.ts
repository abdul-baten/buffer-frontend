// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { ScheduleWeekRoutingModule } from './schedule-week-routing.module';
import { ScheduleEventViewModalModule } from '../modal/schedule-event-view-modal/schedule-event-view-modal.module';
import { ScheduleSocialAccountsModule } from '@shared/module/schedule-social-accounts/schedule-social-accounts.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Services
import { ScheduleService } from '@core/service/schedule/schedule.service';

// Facades
import { ScheduleWeekFacade } from './facade/schedule-week.facade';

// Components
import { ScheduleWeekComponent } from './container/schedule-week.component';
import { ScheduleWeekHeaderComponent } from './component/schedule-week-header/schedule-week-header.component';
import { ScheduleWeekCalendarComponent } from './component/schedule-week-calendar/schedule-week-calendar.component';
import { ScheduleWeekCalendarOptionsComponent } from './component/schedule-week-calendar-options/schedule-week-calendar-options.component';

@NgModule({
  declarations: [
    ScheduleWeekComponent,
    ScheduleWeekHeaderComponent,
    ScheduleWeekCalendarOptionsComponent,
    ScheduleWeekCalendarComponent
  ],
  imports: [
    CommonModule,
    ScheduleWeekRoutingModule,
    ScheduleSocialAccountsModule,

    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,

    ScheduleEventViewModalModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [ScheduleWeekFacade, ScheduleService]
})
export class ScheduleWeekModule {}
