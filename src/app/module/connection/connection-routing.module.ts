import { ConnectionComponent } from './container/connection.component';
import { NgModule } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { RouterModule, Routes } from '@angular/router';
import { DocumentResolver } from 'src/app/resolvers/document.resolver';

const routes: Routes = [
  {
    path: '',
    component: ConnectionComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_PROFILES.PAGE_ROUTE,
      },
      {
        data: { title: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/choose-connection/choose-connection.module').then(m => m.ChooseConnectionModule),
        path: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
      },
      {
        data: { title: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_FB_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/facebook-page/facebook-page.module').then(m => m.FacebookPageModule),
        path: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_FB_PAGE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
      },
      {
        data: { title: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_FB_GROUP.PAGE_TITLE },
        loadChildren: () => import('./routes/facebook-group/facebook-group.module').then(m => m.FacebookGroupModule),
        path: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_FB_GROUP.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
      },
      {
        data: { title: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_TWITTER_PROFILE.PAGE_TITLE },
        loadChildren: () => import('./routes/twitter/twitter.module').then(m => m.TwitterModule),
        path: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_TWITTER_PROFILE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
      },
      {
        data: { title: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_LINKEDIN_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/linkedin-page/linkedin-page.module').then(m => m.LinkedInPageModule),
        path: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_LINKEDIN_PAGE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
      },
      {
        data: { title: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_LINKEDIN_PROFILE.PAGE_TITLE },
        loadChildren: () => import('./routes/linkedin-profile/linkedin-profile.module').then(m => m.LinkedInProfileModule),
        path: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_LINKEDIN_PROFILE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
      },
      {
        data: { title: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_PROFILES.PAGE_TITLE },
        loadChildren: () => import('./routes/profiles/profiles.module').then(m => m.ProfilesModule),
        path: PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_PROFILES.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionRoutingModule {}
