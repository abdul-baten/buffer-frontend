import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { FacebookPageComponent } from './container/facebook-page.component';
import { FacebookPageFacade } from './facade/facebook-page.facade';
import { FacebookPageRoutingModule } from './facebook-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { PopoverModule } from '@shared/module/popover/popover.module';
import { SatPopoverModule } from '@ncstate/sat-popover';

@NgModule({
  declarations: [FacebookPageComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    FacebookPageRoutingModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    PopoverModule,
    SatPopoverModule,
  ],
  providers: [FacebookPageFacade],
})
export class FacebookPageModule {}
