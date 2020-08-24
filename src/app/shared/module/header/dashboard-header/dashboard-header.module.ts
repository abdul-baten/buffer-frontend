import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from '@shared/module/header/dashboard-header/container/dashboard-header.component';
import { DashboardHeaderFacade } from './facade/dashboard-header.facade';
import { DashboardHeaderMenuComponent } from '@shared/module/header/dashboard-header/components/dashboard-header-menu/dashboard-header-menu.component';
import { DashboardHeaderService } from './service/dashboard-header.service';
import { HeaderAccountModule } from '../header-account/header-account.module';
import { LogoIconModule } from '@shared/module/logo/logo-icon/logo-icon.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { SocialProfileListModule } from '@shared/module/social-profile/social-profile-list/social-profile-list.module';

import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [DashboardHeaderComponent, DashboardHeaderMenuComponent],
  imports: [
    CommonModule,
    HeaderAccountModule,
    LogoIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    RouterModule,
    SocialProfileAddModule,
    SocialProfileListModule,
    MenuModule,
  ],
  exports: [DashboardHeaderComponent],
  providers: [DashboardHeaderFacade, DashboardHeaderService],
})
export class DashboardHeaderModule {}
