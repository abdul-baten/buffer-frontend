import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { LinkedInProfileComponent } from './container/linkedin-profile.component';
import { LinkedInProfileFacade } from './facade/linkedin-profile.facade';
import { LinkedInProfileRoutingModule } from './linkedin-profile-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { PopoverModule } from '@shared/module/popover/popover.module';
import { SatPopoverModule } from '@ncstate/sat-popover';

@NgModule({
  declarations: [LinkedInProfileComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    LinkedInProfileRoutingModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    PopoverModule,
    SatPopoverModule,
  ],
  providers: [LinkedInProfileFacade],
})
export class LinkedInProfileModule {}
