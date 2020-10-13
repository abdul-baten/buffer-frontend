import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoDataFoundComponent } from './container/no-data-found.component';

@NgModule({
  declarations: [NoDataFoundComponent],
  exports: [NoDataFoundComponent],
  imports: [ButtonModule, CommonModule]
})
export class NoDataFoundModule {}
