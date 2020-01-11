// Core Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard
import { ScheduleGuard } from '@app/schedule/guard/schedule.guard';

// Component
import { ScheduleComponent } from '@app/schedule/container/schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    canActivate: [ScheduleGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ScheduleGuard]
})
export class ScheduleRoutingModule {}
