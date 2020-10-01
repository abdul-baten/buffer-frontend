import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from '../../header/dashboard-header/container/dashboard-header.component';
import { DashboardHeaderFacade } from './facade/dashboard-header.facade';
import { DashboardHeaderMenuComponent } from '../../header/dashboard-header/components/dashboard-header-menu/dashboard-header-menu.component';
import { DashboardHeaderService } from './service/dashboard-header.service';
import { HeaderAccountModule } from '../header-account/header-account.module';
import { LogoIconModule } from '../../logo/logo-icon/logo-icon.module';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [DashboardHeaderComponent, DashboardHeaderMenuComponent],
  imports: [ButtonModule, CommonModule, HeaderAccountModule, LogoIconModule, MenuModule, RouterModule, TooltipModule],
  exports: [DashboardHeaderComponent],
  providers: [DashboardHeaderFacade, DashboardHeaderService],
})
export class DashboardHeaderModule {}
