
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './container/invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [CommonModule, InvoiceRoutingModule]
})
export class InvoiceModule {}
