// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules

// Third Party Modules

// Components
import { MainLogoComponent } from './container/main-logo.component';

@NgModule({
  declarations: [MainLogoComponent],
  imports: [CommonModule],
  exports: [MainLogoComponent]
})
export class MainLogoModule {}
