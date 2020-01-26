import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from '@app/schedule/container/schedule.component';
import { ScheduleGuard } from '@app/schedule/guard/schedule.guard';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    canActivate: [ScheduleGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ScheduleGuard],
})
export class ScheduleRoutingModule {}
