import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { LinkedInProfileComponent } from './container/linkedin-profile.component';
import { LinkedInProfileFacade } from './facade/linkedin-profile.facade';
import { LinkedInProfileRoutingModule } from './linkedin-profile-routing.module';
import { LinkedInProfileService } from './service/linkedin-profile.service';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LinkedInProfileComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    LinkedInProfileRoutingModule,
    LoaderModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [LinkedInProfileFacade, LinkedInProfileService],
})
export class LinkedInProfileModule {}
