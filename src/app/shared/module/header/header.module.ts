import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './container/header.component';
import { LogoModule } from '../logo/logo.module';
import { AuthMenuModule } from '../auth-menu/auth-menu.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule, AuthMenuModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
