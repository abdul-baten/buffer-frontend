// Core Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Module
import { ScheduleRoutingModule } from './schedule-routing.module';
import { DashboardHeaderModule } from '@shared/module/dashboard-header/dashboard-header.module';

// Third Party Module
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

// Component
import { ScheduleComponent } from './container/schedule.component';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    DashboardHeaderModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ]
})
export class ScheduleModule {}
