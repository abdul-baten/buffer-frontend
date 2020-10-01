import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgModule } from '@angular/core';
import { PlanComponent } from './container/plan.component';
import { PlanFacade } from './facade/plan.facade';
import { PlanPricingModule } from '../../../../shared/plan-pricing/plan-pricing.module';
import { PlanRoutingModule } from './plan-routing.module';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from '../../../../shared/header/toolbar/toolbar.module';

@NgModule({
  declarations: [PlanComponent],
  imports: [ButtonModule, CardModule, CommonModule, FormsModule, InputSwitchModule, PlanPricingModule, PlanRoutingModule, TableModule, ToolbarModule],
  providers: [PlanFacade],
})
export class PlanModule {}
