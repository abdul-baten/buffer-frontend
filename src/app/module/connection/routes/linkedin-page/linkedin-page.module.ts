import { CommonModule } from '@angular/common';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { LinkedInPageComponent } from './container/linkedin-page.component';
import { LinkedInPageFacade } from './facade/linkedin-page.facade';
import { LinkedInPageRoutingModule } from './linkedin-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';

@NgModule({
  declarations: [LinkedInPageComponent],
  imports: [CommonModule, ConnectionPlanSidebarModule, LinkedInPageRoutingModule, MatButtonModule, MatListModule, MatSidenavModule, ToolbarModule],
  providers: [LinkedInPageFacade],
})
export class LinkedInPageModule {}
