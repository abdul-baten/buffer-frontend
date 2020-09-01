import { CommonModule } from '@angular/common';
import { AuctionRoutingModule } from '@app/auction/auction-routing.module';
import { MainHeaderModule } from '@shared/module/header/main-header/main-header.module';
import { NgModule } from '@angular/core';
import { AuctionComponent } from './container/auction.component';
import { PlanPricingModule } from '@shared/module/plan-pricing/plan-pricing.module';

@NgModule({
  declarations: [AuctionComponent],
  imports: [CommonModule, AuctionRoutingModule, MainHeaderModule, PlanPricingModule],
})
export class AuctionModule {}
