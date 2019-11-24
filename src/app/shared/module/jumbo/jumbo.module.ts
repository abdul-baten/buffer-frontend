import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumboComponent } from './container/jumbo.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [JumboComponent],
  imports: [CommonModule, LogoModule],
  exports: [JumboComponent]
})
export class JumboModule {}
