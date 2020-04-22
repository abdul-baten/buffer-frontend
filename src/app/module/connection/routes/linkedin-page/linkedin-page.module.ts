import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { LinkedInPageComponent } from './container/linkedin-page.component';
import { LinkedInPageFacade } from './facade/linkedin-page.facade';
import { LinkedInPageRoutingModule } from './linkedin-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { PopoverModule } from '@shared/module/popover/popover.module';
import { SatPopoverModule } from '@ncstate/sat-popover';

@NgModule({
  declarations: [LinkedInPageComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    LinkedInPageRoutingModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    PopoverModule,
    SatPopoverModule,
  ],
  providers: [LinkedInPageFacade],
})
export class LinkedInPageModule {}
