import { AccountHeaderModule } from '@shared/module/header/account-header/account-header.module';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { PlanComponent } from './container/plan.component';
import { PlanRoutingModule } from './plan-routing.module';

@NgModule({
  declarations: [PlanComponent],
  imports: [CommonModule, PlanRoutingModule, AccountHeaderModule, MatSlideToggleModule],
})
export class PlanModule {}
