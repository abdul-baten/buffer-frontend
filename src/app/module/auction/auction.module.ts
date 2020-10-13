import { AuctionComponent } from './container/auction.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { CommonModule } from '@angular/common';
import { MainHeaderModule } from 'src/app/shared/header/main-header/main-header.module';
import { NgModule } from '@angular/core';
import { PlanPricingModule } from 'src/app/shared/plan-pricing/plan-pricing.module';

@NgModule({
  declarations: [AuctionComponent],
  imports: [CommonModule, AuctionRoutingModule, MainHeaderModule, PlanPricingModule]
})
export class AuctionModule {}
