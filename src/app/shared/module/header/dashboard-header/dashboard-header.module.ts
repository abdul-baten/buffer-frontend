// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { LogoIconModule } from '@shared/module/logo/logo-icon/logo-icon.module';

// Third Party Modules
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

// Components
import { DashboardHeaderComponent } from '@shared/module/header/dashboard-header/container/dashboard-header.component';
import { DashboardHeaderMenuComponent } from '@shared/module/header/dashboard-header/component/dashboard-header-menu/dashboard-header-menu.component';
import { DashboardHeaderAccountComponent } from '@shared/module/header/dashboard-header/component/dashboard-header-account/dashboard-header-account.component';

@NgModule({
  declarations: [DashboardHeaderComponent, DashboardHeaderMenuComponent, DashboardHeaderAccountComponent],
  imports: [
    CommonModule,
    LogoIconModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule
  ],
  exports: [DashboardHeaderComponent]
})
export class DashboardHeaderModule {}
