import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from '@shared/module/header/dashboard-header/container/dashboard-header.component';
import { DashboardHeaderFacade } from './facade/dashboard-header.facade';
import { DashboardHeaderMenuComponent } from '@shared/module/header/dashboard-header/components/dashboard-header-menu/dashboard-header-menu.component';
import { DashboardHeaderService } from './service/dashboard-header.service';
import { HeaderAccountModule } from '../header-account/header-account.module';
import { LogoIconModule } from '@shared/module/logo/logo-icon/logo-icon.module';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';

@NgModule({
  declarations: [DashboardHeaderComponent, DashboardHeaderMenuComponent],
  imports: [CommonModule, HeaderAccountModule, LogoIconModule, MenuModule, PanelMenuModule, RouterModule, SocialProfileAddModule],
  exports: [DashboardHeaderComponent],
  providers: [DashboardHeaderFacade, DashboardHeaderService],
})
export class DashboardHeaderModule {}
