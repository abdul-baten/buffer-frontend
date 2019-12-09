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

// Components
import { DashboardHeaderComponent } from './container/dashboard-header.component';
import { DashboardHeaderMenuComponent } from './component/dashboard-header-menu/dashboard-header-menu.component';
import { DashboardHeaderAccountComponent } from './component/dashboard-header-account/dashboard-header-account.component';

@NgModule({
  declarations: [DashboardHeaderComponent, DashboardHeaderMenuComponent, DashboardHeaderAccountComponent],
  imports: [CommonModule, LogoIconModule, MatButtonModule, MatMenuModule, MatIconModule, MatDividerModule],
  exports: [DashboardHeaderComponent]
})
export class DashboardHeaderModule {}
