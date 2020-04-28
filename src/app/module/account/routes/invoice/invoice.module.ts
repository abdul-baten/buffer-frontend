import { AccountHeaderModule } from '@shared/module/header/account-header/account-header.module';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './container/invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [CommonModule, InvoiceRoutingModule, AccountHeaderModule],
})
export class InvoiceModule {}
