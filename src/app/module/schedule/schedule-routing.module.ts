import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './container/schedule.component';

const routes: Routes = [
  {
    component: ScheduleComponent,
    path: ''
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ScheduleRoutingModule {}
