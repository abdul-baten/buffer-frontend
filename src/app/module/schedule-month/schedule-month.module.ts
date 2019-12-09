// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { ScheduleMonthRoutingModule } from './schedule-month-routing.module';
import { ScheduleSocialAccountsModule } from '@shared/module/schedule-social-accounts/schedule-social-accounts.module';
import { ScheduleEventViewModalModule } from '@shared/module/modal/schedule-event-view-modal/schedule-event-view-modal.module';
import { ScheduleEventCreateModalModule } from '@shared/module/modal/schedule-event-create-modal/schedule-event-create-modal.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Facades
import { ScheduleMonthFacade } from './facade/schedule-month.facade';

// Services
import { ScheduleService } from '@core/service/schedule/schedule.service';

// Components
import { ScheduleMonthComponent } from './container/schedule-month.component';
import { ScheduleMonthHeaderComponent } from './component/schedule-month-header/schedule-month-header.component';
import { ScheduleMonthCalendarComponent } from './component/schedule-month-calendar/schedule-month-calendar.component';
import { ScheduleMonthCalendarOptionsComponent } from './component/schedule-month-calendar-options/schedule-month-calendar-options.component';

@NgModule({
  declarations: [
    ScheduleMonthComponent,
    ScheduleMonthHeaderComponent,
    ScheduleMonthCalendarComponent,
    ScheduleMonthCalendarOptionsComponent
  ],
  imports: [
    CommonModule,
    ScheduleMonthRoutingModule,
    ScheduleSocialAccountsModule,

    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,

    ScheduleEventViewModalModule,
    ScheduleEventCreateModalModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [ScheduleMonthFacade, ScheduleService]
})
export class ScheduleMonthModule {}
