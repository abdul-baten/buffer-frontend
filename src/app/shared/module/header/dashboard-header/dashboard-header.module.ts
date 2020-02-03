import { CommonModule } from '@angular/common';
import { DashboardHeaderAccountComponent } from '@shared/module/header/dashboard-header/components/dashboard-header-account/dashboard-header-account.component';
import { DashboardHeaderComponent } from '@shared/module/header/dashboard-header/container/dashboard-header.component';
import { DashboardHeaderMenuComponent } from '@shared/module/header/dashboard-header/components/dashboard-header-menu/dashboard-header-menu.component';
import { LogoIconModule } from '@shared/module/logo/logo-icon/logo-icon.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardHeaderComponent, DashboardHeaderMenuComponent, DashboardHeaderAccountComponent],
  imports: [
    CommonModule,
    LogoIconModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    RouterModule,
  ],
  exports: [DashboardHeaderComponent],
})
export class DashboardHeaderModule {}
