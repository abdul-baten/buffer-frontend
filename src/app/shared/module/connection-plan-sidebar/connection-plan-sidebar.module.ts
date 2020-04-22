import { CommonModule } from '@angular/common';
import { ConnectionPlanSidebarComponent } from './container/connection-plan-sidebar.component';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ConnectionPlanSidebarComponent],
  exports: [ConnectionPlanSidebarComponent],
  imports: [CommonModule, MatListModule],
})
export class ConnectionPlanSidebarModule {}
