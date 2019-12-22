// Core Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { ScheduleComponent } from './container/schedule.component';
import { PAGES } from '@core/constant/page/page.constant';
import { ScheduleGuard } from './guard/schedule.guard';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    canActivate: [ScheduleGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGES.SCHEDULE_MONTH_PAGE.ROUTE
      },
      {
        path: PAGES.SCHEDULE_MONTH_PAGE.ROUTE,
        data: { title: PAGES.SCHEDULE_MONTH_PAGE.TITLE },
        loadChildren: () => import('./module/schedule-month/schedule-month.module').then(m => m.ScheduleMonthModule)
      },
      {
        path: PAGES.SCHEDULE_WEEK_PAGE.ROUTE,
        data: { title: PAGES.SCHEDULE_WEEK_PAGE.TITLE },
        loadChildren: () => import('./module/schedule-week/schedule-week.module').then(m => m.ScheduleWeekModule)
      },
      {
        path: PAGES.SCHEDULE_DAY_PAGE.ROUTE,
        data: { title: PAGES.SCHEDULE_DAY_PAGE.TITLE },
        loadChildren: () => import('./module/schedule-day/schedule-day.module').then(m => m.ScheduleDayModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ScheduleGuard]
})
export class ScheduleRoutingModule {}
