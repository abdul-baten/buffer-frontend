import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./module/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./module/signup/signup.module').then(m => m.SignupModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: true,
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
