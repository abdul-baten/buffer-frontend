// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { ScheduleWeekRoutingModule } from './schedule-week-routing.module';
import { ScheduleCalendarViewModule } from '@shared/module/schedule-calendar-view/schedule-calendar-view.module';
import { ScheduleEventViewModalModule } from '../modal/schedule-event-view-modal/schedule-event-view-modal.module';
import { ScheduleSocialAccountsModule } from '@shared/module/schedule-social-accounts/schedule-social-accounts.module';
import { ScheduleCalendarDateSelectionModule } from '@shared/module/schedule-calendar-date-selection/schedule-calendar-date-selection.module';
import { ScheduleCalendarAddPostButtonModule } from '@shared/module/schedule-calendar-add-post-button/schedule-calendar-add-post-button.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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
    ScheduleCalendarViewModule,
    ScheduleSocialAccountsModule,

    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,

    ScheduleEventViewModalModule,
    ScheduleCalendarAddPostButtonModule,
    ScheduleCalendarDateSelectionModule
  ]
})
export class ScheduleWeekModule {}
