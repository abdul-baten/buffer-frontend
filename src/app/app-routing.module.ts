import { AuthActivateGuard } from '@core/guard/activate/auth-activate.guard';
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
    canActivate: [AuthActivateGuard],
    path: PAGES.DASHBOARD_PAGE.PAGE_ROUTE,
    data: { title: PAGES.DASHBOARD_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    canActivate: [AuthActivateGuard],
    path: PAGES.SCHEDULE_PAGE.PAGE_ROUTE,
    data: { title: PAGES.SCHEDULE_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/schedule/schedule.module').then(m => m.ScheduleModule),
  },
  {
    canActivate: [AuthActivateGuard],
    path: PAGES.ACCOUNT_PAGE.PAGE_ROUTE,
    data: { title: PAGES.ACCOUNT_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/account/account.module').then(m => m.AccountModule),
  },
  {
    canActivate: [AuthActivateGuard],
    path: PAGES.BUCKET_PAGE.PAGE_ROUTE,
    data: { title: PAGES.BUCKET_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/bucket/bucket.module').then(m => m.BucketModule),
  },
  {
    canActivate: [AuthActivateGuard],
    path: PAGES.ANALYZE_PAGE.PAGE_ROUTE,
    data: { title: PAGES.ANALYZE_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/analyze/analyze.module').then(m => m.AnalyzeModule),
  },
  {
    canActivate: [AuthActivateGuard],
    path: PAGES.CONNECTION_MODULE.PAGE_ROUTE,
    data: { title: PAGES.CONNECTION_MODULE.PAGE_TITLE },
    loadChildren: () => import('./module/connection/connection.module').then(m => m.ConnectionModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: false,
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
      urlUpdateStrategy: 'deferred',
      onSameUrlNavigation: 'ignore',
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
