import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './container/main-header.component';
import { MainLogoModule } from '../../logo/main-logo/main-logo.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainHeaderComponent],
  exports: [MainHeaderComponent],
  imports: [CommonModule, MainLogoModule, ButtonModule, RouterModule]
})
export class MainHeaderModule {}
