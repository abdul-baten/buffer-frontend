import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoDataFoundComponent } from './container/no-data-found.component';

@NgModule({
  declarations: [NoDataFoundComponent],
  imports: [CommonModule],
  exports: [NoDataFoundComponent],
})
export class NoDataFoundModule {}
