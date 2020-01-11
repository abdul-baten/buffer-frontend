// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { MenuModule } from '@shared/module/menu/menu.module';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';

// Components
import { MainHeaderComponent } from '@shared/module/header/main-header/container/main-header.component';

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [CommonModule, MainLogoModule, MenuModule],
  exports: [MainHeaderComponent]
})
export class MainHeaderModule {}
