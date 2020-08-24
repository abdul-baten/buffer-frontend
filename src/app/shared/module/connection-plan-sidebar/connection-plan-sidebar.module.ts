import { CommonModule } from '@angular/common';
import { ConnectionPlanSidebarComponent } from './container/connection-plan-sidebar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ConnectionPlanSidebarComponent],
  exports: [ConnectionPlanSidebarComponent],
  imports: [CommonModule],
})
export class ConnectionPlanSidebarModule {}
