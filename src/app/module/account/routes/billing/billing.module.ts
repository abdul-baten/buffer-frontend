import { BillingComponent } from './container/billing.component';
import { BillingRoutingModule } from './billing-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BillingComponent],
  imports: [CommonModule, BillingRoutingModule]
})
export class BillingModule {}
