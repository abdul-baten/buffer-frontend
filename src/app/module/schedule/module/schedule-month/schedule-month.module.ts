// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { ScheduleMonthRoutingModule } from './schedule-month-routing.module';
import { ScheduleCalendarViewModule } from '@shared/module/schedule-calendar-view/schedule-calendar-view.module';
import { ScheduleSocialAccountsModule } from '@shared/module/schedule-social-accounts/schedule-social-accounts.module';
import { ScheduleCalendarDateSelectionModule } from '@shared/module/schedule-calendar-date-selection/schedule-calendar-date-selection.module';
import { ScheduleCalendarAddPostButtonModule } from '@shared/module/schedule-calendar-add-post-button/schedule-calendar-add-post-button.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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

    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatButtonToggleModule,

    ScheduleCalendarViewModule,
    ScheduleMonthRoutingModule,
    ScheduleSocialAccountsModule,
    ScheduleCalendarAddPostButtonModule,
    ScheduleCalendarDateSelectionModule
  ]
})
export class ScheduleMonthModule {}
