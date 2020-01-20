// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MainLogoComponent } from '@shared/module/logo/main-logo/container/main-logo.component';

@NgModule({
  declarations: [MainLogoComponent],
  exports: [MainLogoComponent],
  imports: [CommonModule],
})
export class MainLogoModule {}
