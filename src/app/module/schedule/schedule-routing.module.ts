// Core Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { ScheduleComponent } from './container/schedule.component';
import { PAGES } from '@core/constant/page/page.constant';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGES.SCHEDULE_MONTH_PAGE.ROUTE
      },
      {
        path: PAGES.SCHEDULE_MONTH_PAGE.ROUTE,
        data: { title: PAGES.SCHEDULE_MONTH_PAGE.TITLE },
        loadChildren: () => import('../schedule-month/schedule-month.module').then(m => m.ScheduleMonthModule)
      },
      {
        path: PAGES.SCHEDULE_WEEK_PAGE.ROUTE,
        data: { title: PAGES.SCHEDULE_WEEK_PAGE.TITLE },
        loadChildren: () => import('../schedule-week/schedule-week.module').then(m => m.ScheduleWeekModule)
      },
      {
        path: PAGES.SCHEDULE_DAY_PAGE.ROUTE,
        data: { title: PAGES.SCHEDULE_DAY_PAGE.TITLE },
        loadChildren: () => import('../schedule-day/schedule-day.module').then(m => m.ScheduleDayModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule {}
