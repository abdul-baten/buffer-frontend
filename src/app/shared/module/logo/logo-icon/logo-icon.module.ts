// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules

// Third Party Modules

// Components
import { LogoIconComponent } from './container/logo-icon.component';

@NgModule({
  declarations: [LogoIconComponent],
  imports: [CommonModule],
  exports: [LogoIconComponent]
})
export class LogoIconModule {}
