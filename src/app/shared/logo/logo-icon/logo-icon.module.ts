import { CommonModule } from '@angular/common';
import { LogoIconComponent } from './container/logo-icon.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LogoIconComponent],
  exports: [LogoIconComponent],
  imports: [CommonModule]
})
export class LogoIconModule {}
