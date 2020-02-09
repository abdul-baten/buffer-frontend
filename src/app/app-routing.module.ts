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
    canActivate: [],
    path: PAGES.DASHBOARD_PAGE.PAGE_ROUTE,
    data: { title: PAGES.DASHBOARD_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    canActivate: [],
    path: PAGES.SCHEDULE_PAGE.PAGE_ROUTE,
    data: { title: PAGES.SCHEDULE_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/schedule/schedule.module').then(m => m.ScheduleModule),
  },
  {
    canActivate: [],
    path: PAGES.ACCOUNT_PAGE.PAGE_ROUTE,
    data: { title: PAGES.ACCOUNT_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/account/account.module').then(m => m.AccountModule),
  },
  {
    canActivate: [],
    path: PAGES.BUCKET_PAGE.PAGE_ROUTE,
    data: { title: PAGES.BUCKET_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/bucket/bucket.module').then(m => m.BucketModule),
  },
  {
    canActivate: [],
    path: PAGES.ANALYZE_PAGE.PAGE_ROUTE,
    data: { title: PAGES.ANALYZE_PAGE.PAGE_TITLE },
    loadChildren: () => import('./module/analyze/analyze.module').then(m => m.AnalyzeModule),
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
