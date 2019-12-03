// Core Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Module
import { ScheduleMonthRoutingModule } from './schedule-month-routing.module';
import { ScheduleSocialAccountsModule } from '@shared/module/schedule-social-accounts/schedule-social-accounts.module';

// Third Party Module
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Component
import { ScheduleMonthComponent } from './container/schedule-month.component';
import { ScheduleMonthHeaderComponent } from './component/schedule-month-header/schedule-month-header.component';
import { ScheduleMonthCalendarComponent } from './component/schedule-month-calendar/schedule-month-calendar.component';
import { ScheduleMonthCalendarOptionsComponent } from './component/schedule-month-calendar-options/schedule-month-calendar-options.component';

@NgModule({
  declarations: [
    ScheduleMonthComponent,
    ScheduleMonthHeaderComponent,
    ScheduleMonthCalendarOptionsComponent,
    ScheduleMonthCalendarComponent
  ],
  imports: [
    CommonModule,
    ScheduleMonthRoutingModule,
    ScheduleSocialAccountsModule,

    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatButtonToggleModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: []
})
export class ScheduleMonthModule {}
