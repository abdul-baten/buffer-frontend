import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from '@shared/module/header/main-header/container/main-header.component';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [CommonModule, MainLogoModule, ButtonModule, RouterModule],
  exports: [MainHeaderComponent],
})
export class MainHeaderModule {}
