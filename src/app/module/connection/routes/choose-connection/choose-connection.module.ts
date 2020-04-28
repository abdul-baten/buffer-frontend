import { ChooseConnectionComponent } from './container/choose-connection.component';
import { ChooseConnectionFacade } from './facade/choose-connection.facade';
import { ChooseConnectionRoutingModule } from './choose-connection-routing.module';
import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ChooseConnectionComponent],
  imports: [
    ChooseConnectionRoutingModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
  ],
  providers: [ChooseConnectionFacade],
})
export class ChooseConnectionModule {}
