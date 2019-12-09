// Core Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Module
import { ScheduleDayRoutingModule } from './schedule-day-routing.module';
import { ScheduleSocialAccountsModule } from '@shared/module/schedule-social-accounts/schedule-social-accounts.module';

// Third Party Module
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Component
import { ScheduleDayComponent } from './container/schedule-day.component';
import { ScheduleDayHeaderComponent } from './component/schedule-day-header/schedule-day-header.component';
import { ScheduleDayCalendarComponent } from './component/schedule-day-calendar/schedule-day-calendar.component';
import { ScheduleDayCreateModalComponent } from './component/schedule-day-create-modal/schedule-day-create-modal.component';
import { ScheduleDayCalendarOptionsComponent } from './component/schedule-day-calendar-options/schedule-day-calendar-options.component';

@NgModule({
  declarations: [
    ScheduleDayComponent,
    ScheduleDayHeaderComponent,
    ScheduleDayCalendarComponent,
    ScheduleDayCreateModalComponent,
    ScheduleDayCalendarOptionsComponent
  ],
  imports: [
    CommonModule,
    ScheduleDayRoutingModule,
    ScheduleSocialAccountsModule,

    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatButtonToggleModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  entryComponents: [ScheduleDayCreateModalComponent]
})
export class ScheduleDayModule {}
