import { AccountHeaderModule } from '@shared/module/header/account-header/account-header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillingComponent } from './container/billing.component';
import { BillingRoutingModule } from './billing-routing.module';

@NgModule({
  declarations: [BillingComponent],
  imports: [CommonModule, BillingRoutingModule, AccountHeaderModule],
})
export class BillingModule {}
