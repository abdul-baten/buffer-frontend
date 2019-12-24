import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGES } from './core/constant/page/page.constant';

const routes: Routes = [
  {
    path: PAGES.LANDING_PAGE.ROUTE,
    loadChildren: () => import('./module/landing/landing.module').then(m => m.LandingModule),
    data: { title: PAGES.LANDING_PAGE.TITLE }
  },
  {
    path: PAGES.SIGN_IN_PAGE.ROUTE,
    loadChildren: () => import('./module/signin/signin.module').then(m => m.SigninModule),
    data: { title: PAGES.SIGN_IN_PAGE.TITLE }
  },
  {
    path: PAGES.SIGN_UP_PAGE.ROUTE,
    loadChildren: () => import('./module/signup/signup.module').then(m => m.SignupModule),
    data: { title: PAGES.SIGN_UP_PAGE.TITLE }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: false,
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
      urlUpdateStrategy: 'eager',
      onSameUrlNavigation: 'ignore',
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'corrected'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
