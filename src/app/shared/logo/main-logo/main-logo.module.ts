import { CommonModule } from '@angular/common';
import { MainLogoComponent } from './container/main-logo.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MainLogoComponent],
  exports: [MainLogoComponent],
  imports: [CommonModule],
})
export class MainLogoModule {}
