// Core Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
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
