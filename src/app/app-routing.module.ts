import { DocumentResolver, UserConnectionResolver } from './resolvers';
import { NgModule } from '@angular/core';
import { RouteMeta } from './core/constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    data: { title: RouteMeta.LANDING.TITLE },
    loadChildren: () => import('./module/landing/landing.module').then((module) => module.LandingModule),
    path: RouteMeta.LANDING.ROUTE,
    resolve: { document_data: DocumentResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.PRICING.TITLE },
    loadChildren: () => import('./module/auction/auction.module').then((module) => module.AuctionModule),
    path: RouteMeta.PRICING.TITLE,
    resolve: { document_data: DocumentResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.SIGN_IN.TITLE },
    loadChildren: () => import('./module/signin/signin.module').then((module) => module.SigninModule),
    path: RouteMeta.SIGN_IN.ROUTE,
    resolve: { document_data: DocumentResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.SIGN_UP.TITLE },
    loadChildren: () => import('./module/signup/signup.module').then((module) => module.SignupModule),
    path: RouteMeta.SIGN_UP.ROUTE,
    resolve: { document_data: DocumentResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.DASHBOARD.TITLE },
    loadChildren: () => import('./module/dashboard/dashboard.module').then((module) => module.DashboardModule),
    path: RouteMeta.DASHBOARD.ROUTE,
    resolve: {
      document_data: DocumentResolver,
      user_meta: UserConnectionResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.SCHEDULE.TITLE },
    loadChildren: () => import('./module/schedule/schedule.module').then((module) => module.ScheduleModule),
    path: RouteMeta.SCHEDULE.ROUTE,
    resolve: {
      document_data: DocumentResolver,
      user_meta: UserConnectionResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.ACCOUNT_MODULE.TITLE },
    loadChildren: () => import('./module/account/account.module').then((module) => module.AccountModule),
    path: RouteMeta.ACCOUNT_MODULE.ROUTE,
    resolve: { document_data: DocumentResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.BUCKET.TITLE },
    loadChildren: () => import('./module/bucket/bucket.module').then((module) => module.BucketModule),
    path: RouteMeta.BUCKET.ROUTE,
    resolve: {
      document_data: DocumentResolver,
      user_meta: UserConnectionResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.ANALYZE.TITLE },
    loadChildren: () => import('./module/analyze/analyze.module').then((module) => module.AnalyzeModule),
    path: RouteMeta.ANALYZE.ROUTE,
    resolve: { user_meta: UserConnectionResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.CONNECTION_MODULE.TITLE },
    loadChildren: () => import('./module/connection/connection.module').then((module) => module.ConnectionModule),
    path: RouteMeta.CONNECTION_MODULE.ROUTE,
    resolve: {
      document_data: DocumentResolver,
      user_meta: UserConnectionResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    data: { title: RouteMeta.VIDEO_MODULE.TITLE },
    loadChildren: () => import('./module/video/video.module').then((module) => module.VideoModule),
    path: RouteMeta.VIDEO_MODULE.ROUTE,
    resolve: { document_data: DocumentResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      enableTracing: false,
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'ignore',
      relativeLinkResolution: 'corrected',
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top',
      urlUpdateStrategy: 'eager',
      useHash: false
    })
  ]
})
export class AppRoutingModule {}
