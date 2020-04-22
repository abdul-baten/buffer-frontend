import { ChooseConnectionComponent } from './container/choose-connection.component';
import { ChooseConnectionFacade } from './facade/choose-connection.facade';
import { ChooseConnectionRoutingModule } from './choose-connection-routing.module';
import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { PopoverModule } from '@shared/module/popover/popover.module';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';

@NgModule({
  declarations: [ChooseConnectionComponent],
  imports: [
    ChooseConnectionRoutingModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    PopoverModule,
    SatPopoverModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
  ],
  providers: [ChooseConnectionFacade],
})
export class ChooseConnectionModule {}
