import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { JumboComponent } from './container/jumbo.component';

@NgModule({
  declarations: [JumboComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [JumboComponent]
})
export class JumboModule {}
