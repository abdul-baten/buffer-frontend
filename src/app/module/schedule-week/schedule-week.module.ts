// Core Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Module
import { ScheduleWeekRoutingModule } from './schedule-week-routing.module';
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
export class ScheduleWeekModule {}
