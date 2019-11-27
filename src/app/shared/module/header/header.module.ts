// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { LogoModule } from '@shared/module/logo/logo.module';
import { MenuModule } from '@shared/module/menu/menu.module';

// Third Party Modules

// Components
import { HeaderComponent } from './container/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule, MenuModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
