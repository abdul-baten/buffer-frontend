import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleDayComponent } from './container/schedule-day.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleDayComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleDayRoutingModule {}
