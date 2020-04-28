import { NgModule } from '@angular/core';
import { PAGES } from './core/constant/page/page.constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: PAGES.LANDING_PAGE.PAGE_ROUTE,
    data: { title: PAGES.LANDING_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: PAGES.SIGN_IN_PAGE.PAGE_ROUTE,
    data: { title: PAGES.SIGN_IN_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/signin/signin.module').then(m => m.SigninModule),
  },
  {
    path: PAGES.SIGN_UP_PAGE.PAGE_ROUTE,
    data: { title: PAGES.SIGN_UP_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/signup/signup.module').then(m => m.SignupModule),
  },
  {
    path: PAGES.DASHBOARD_PAGE.PAGE_ROUTE,
    data: { title: PAGES.DASHBOARD_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: PAGES.SCHEDULE_PAGE.PAGE_ROUTE,
    data: { title: PAGES.SCHEDULE_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/schedule/schedule.module').then(m => m.ScheduleModule),
  },
  {
    path: PAGES.ACCOUNT_MODULE.PAGE_ROUTE,
    data: { title: PAGES.ACCOUNT_MODULE.PAGE_TITLE },
    loadChildren: () => import('./module/account/account.module').then(m => m.AccountModule),
  },
  {
    path: PAGES.BUCKET_PAGE.PAGE_ROUTE,
    data: { title: PAGES.BUCKET_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/bucket/bucket.module').then(m => m.BucketModule),
  },
  {
    path: PAGES.ANALYZE_PAGE.PAGE_ROUTE,
    data: { title: PAGES.ANALYZE_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/analyze/analyze.module').then(m => m.AnalyzeModule),
  },
  {
    path: PAGES.CONNECTION_MODULE.PAGE_ROUTE,
    data: { title: PAGES.CONNECTION_MODULE.PAGE_TITLE },
    loadChildren: () => import('./module/connection/connection.module').then(m => m.ConnectionModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      enableTracing: false,
      onSameUrlNavigation: 'ignore',
      relativeLinkResolution: 'corrected',
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top',
      urlUpdateStrategy: 'deferred',
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
