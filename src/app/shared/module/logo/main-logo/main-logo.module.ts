import { CommonModule } from '@angular/common';
import { MainLogoComponent } from '@shared/module/logo/main-logo/container/main-logo.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MainLogoComponent],
  exports: [MainLogoComponent],
  imports: [CommonModule],
})
export class MainLogoModule {}
