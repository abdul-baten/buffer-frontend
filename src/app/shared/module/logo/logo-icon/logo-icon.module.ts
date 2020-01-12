// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LogoIconComponent } from '@shared/module/logo/logo-icon/container/logo-icon.component';

@NgModule({
  declarations: [LogoIconComponent],
  imports: [CommonModule],
  exports: [LogoIconComponent],
})
export class LogoIconModule {}
