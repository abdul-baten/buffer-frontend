// Core Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Module
import { ScheduleDayRoutingModule } from './schedule-day-routing.module';
import { ScheduleCalendarViewModule } from '@shared/module/schedule-calendar-view/schedule-calendar-view.module';
import { ScheduleSocialAccountsModule } from '@shared/module/schedule-social-accounts/schedule-social-accounts.module';
import { ScheduleCalendarDateSelectionModule } from '@shared/module/schedule-calendar-date-selection/schedule-calendar-date-selection.module';
import { ScheduleCalendarAddPostButtonModule } from '@shared/module/schedule-calendar-add-post-button/schedule-calendar-add-post-button.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Component
import { ScheduleDayComponent } from './container/schedule-day.component';
import { ScheduleDayHeaderComponent } from './component/schedule-day-header/schedule-day-header.component';
import { ScheduleDayCalendarComponent } from './component/schedule-day-calendar/schedule-day-calendar.component';
import { ScheduleDayCalendarOptionsComponent } from './component/schedule-day-calendar-options/schedule-day-calendar-options.component';

@NgModule({
  declarations: [
    ScheduleDayComponent,
    ScheduleDayHeaderComponent,
    ScheduleDayCalendarComponent,
    ScheduleDayCalendarOptionsComponent
  ],
  imports: [
    CommonModule,

    ScheduleDayRoutingModule,
    ScheduleCalendarViewModule,
    ScheduleSocialAccountsModule,

    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatButtonToggleModule,

    ScheduleCalendarAddPostButtonModule,
    ScheduleCalendarDateSelectionModule
  ]
})
export class ScheduleDayModule {}
