import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgModule } from '@angular/core';
import { PlanPricingComponent } from './container/plan-pricing.component';
import { PlanPricingFacade } from './facade/plan-pricing.facade';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [PlanPricingComponent],
  exports: [PlanPricingComponent],
  imports: [ButtonModule, CommonModule, FormsModule, InputSwitchModule, TooltipModule, TableModule],
  providers: [PlanPricingFacade],
})
export class PlanPricingModule {}
