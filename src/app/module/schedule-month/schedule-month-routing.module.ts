import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleMonthComponent } from './container/schedule-month.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleMonthComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleMonthRoutingModule {}
