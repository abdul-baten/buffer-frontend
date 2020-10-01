import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoDataFoundComponent } from './container/no-data-found.component';

@NgModule({
  declarations: [NoDataFoundComponent],
  imports: [ButtonModule, CommonModule],
  exports: [NoDataFoundComponent],
})
export class NoDataFoundModule {}
