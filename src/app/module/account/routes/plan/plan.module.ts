import { AccountHeaderModule } from '@shared/module/header/account-header/account-header.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgModule } from '@angular/core';
import { PlanComponent } from './container/plan.component';
import { PlanRoutingModule } from './plan-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PlanComponent],
  imports: [AccountHeaderModule, ButtonModule, CardModule, CommonModule, FormsModule, InputSwitchModule, PlanRoutingModule, TableModule],
})
export class PlanModule {}
