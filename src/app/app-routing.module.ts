import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGES } from './core/constant/page/page.constant';

const routes: Routes = [
  {
    path: PAGES.LANDING_PAGE.ROUTE,
    data: { title: PAGES.LANDING_PAGE.TITLE },
    loadChildren: () => import('./module/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: PAGES.SIGN_IN_PAGE.ROUTE,
    data: { title: PAGES.SIGN_IN_PAGE.TITLE },
    loadChildren: () => import('./module/signin/signin.module').then(m => m.SigninModule),
  },
  {
    path: PAGES.SIGN_UP_PAGE.ROUTE,
    data: { title: PAGES.SIGN_UP_PAGE.TITLE },
    loadChildren: () => import('./module/signup/signup.module').then(m => m.SignupModule),
  },
  {
    path: PAGES.SCHEDULE_PAGE.ROUTE,
    data: { title: PAGES.SCHEDULE_PAGE.TITLE },
    loadChildren: () => import('./module/schedule/schedule.module').then(m => m.ScheduleModule),
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
