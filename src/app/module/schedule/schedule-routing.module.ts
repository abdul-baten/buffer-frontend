import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './container/schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ScheduleRoutingModule {}
