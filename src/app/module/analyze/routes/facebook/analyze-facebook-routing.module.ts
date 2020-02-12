import { AnalyzeFacebookComponent } from './container/analyze-facebook.component';
import { FacebookRouteAudienceComponent } from './components/facebook-route-audience/facebook-route-audience.component';
import { FacebookRouteOverviewComponent } from './components/facebook-route-overview/facebook-route-overview.component';
import { FacebookRoutePostsComponent } from './components/facebook-route-posts/facebook-route-posts.component';
import { NgModule } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnalyzeFacebookComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGES.ANALYZE_FACEBOOK_OVERVIEW_PAGE.PAGE_ROUTE,
      },
      {
        path: PAGES.ANALYZE_FACEBOOK_OVERVIEW_PAGE.PAGE_ROUTE,
        component: FacebookRouteOverviewComponent,
      },
      {
        path: PAGES.ANALYZE_FACEBOOK_POSTS_PAGE.PAGE_ROUTE,
        component: FacebookRoutePostsComponent,
      },
      {
        path: PAGES.ANALYZE_FACEBOOK_AUDIENCE_PAGE.PAGE_ROUTE,
        component: FacebookRouteAudienceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyzeFacebookRoutingModule {}
