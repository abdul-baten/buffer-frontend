// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules

// Third Party Modules

// Components
import { LogoComponent } from './container/logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule],
  exports: [LogoComponent]
})
export class LogoModule {}
