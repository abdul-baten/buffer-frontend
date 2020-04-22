import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { PopoverComponent } from './container/popover.component';

@NgModule({
  declarations: [PopoverComponent],
  exports: [PopoverComponent],
  imports: [CommonModule, MatButtonModule],
})
export class PopoverModule {}
