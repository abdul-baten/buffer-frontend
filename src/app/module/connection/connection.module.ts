import { CommonModule } from '@angular/common';
import { ConnectionComponent } from './container/connection.component';
import { ConnectionRoutingModule } from './connection-routing.module';
import { DashboardHeaderModule } from '../../shared/header/dashboard-header/dashboard-header.module';
import { HeaderAccountModule } from '../../shared/header/header-account/header-account.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ConnectionComponent],
  imports: [CommonModule, ConnectionRoutingModule, DashboardHeaderModule, HeaderAccountModule]
})
export class ConnectionModule {}
