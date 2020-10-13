import { NgModule } from '@angular/core';
import { BillingComponent } from './container/billing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: BillingComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class BillingRoutingModule {}
