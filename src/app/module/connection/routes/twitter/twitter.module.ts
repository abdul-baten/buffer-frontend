import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { TwitterComponent } from './container/twitter.component';
import { TwitterFacade } from './facade/twitter.facade';
import { TwitterRoutingModule } from './twitter-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { PopoverModule } from '@shared/module/popover/popover.module';
import { SatPopoverModule } from '@ncstate/sat-popover';

@NgModule({
  declarations: [TwitterComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    TwitterRoutingModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    PopoverModule,
    SatPopoverModule,
  ],
  providers: [TwitterFacade],
})
export class TwitterModule {}
