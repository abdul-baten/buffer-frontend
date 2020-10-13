import { NgModule } from '@angular/core';
import { PlanComponent } from './container/plan.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: PlanComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PlanRoutingModule {}
