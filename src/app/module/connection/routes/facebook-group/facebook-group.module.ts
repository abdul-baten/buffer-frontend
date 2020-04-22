import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { FacebookGroupComponent } from './container/facebook-group.component';
import { FacebookGroupFacade } from './facade/facebook-group.facade';
import { FacebookGroupRoutingModule } from './facebook-group-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { PopoverModule } from '@shared/module/popover/popover.module';
import { SatPopoverModule } from '@ncstate/sat-popover';

@NgModule({
  declarations: [FacebookGroupComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    FacebookGroupRoutingModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    PopoverModule,
    SatPopoverModule,
  ],
  providers: [FacebookGroupFacade],
})
export class FacebookGroupModule {}
