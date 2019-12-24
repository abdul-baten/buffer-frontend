import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleWeekComponent } from './container/schedule-week.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleWeekComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleWeekRoutingModule {}
