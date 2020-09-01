import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgModule } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PlanPricingComponent } from './container/plan-pricing.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PlanPricingComponent],
  exports: [PlanPricingComponent],
  imports: [ButtonModule, CommonModule, FormsModule, InputSwitchModule, OverlayPanelModule, TableModule],
})
export class PlanPricingModule {}
