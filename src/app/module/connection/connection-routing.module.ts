import { ConnectionComponent } from './container/connection.component';
import { DocumentResolver } from 'src/app/resolvers';
import { NgModule } from '@angular/core';
import { RouteMeta } from 'src/app/core/constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RouteMeta.CONNECTION_PROFILES.ROUTE
      },
      {
        data: { title: RouteMeta.CONNECTION_CHOOSE.TITLE },
        loadChildren: () => import('./routes/choose-connection/choose-connection.module').then((module) => module.ChooseConnectionModule),
        path: RouteMeta.CONNECTION_CHOOSE.ROUTE,
        resolve: { document_data: DocumentResolver }
      },
      {
        data: { title: RouteMeta.CONNECTION_FB.TITLE },
        loadChildren: () => import('./routes/facebook-page/facebook-page.module').then((module) => module.FacebookPageModule),
        path: RouteMeta.CONNECTION_FB.ROUTE,
        resolve: { document_data: DocumentResolver }
      },
      {
        data: { title: RouteMeta.CONNECTION_FB_GROUP.TITLE },
        loadChildren: () => import('./routes/facebook-group/facebook-group.module').then((module) => module.FacebookGroupModule),
        path: RouteMeta.CONNECTION_FB_GROUP.ROUTE,
        resolve: { document_data: DocumentResolver }
      },
      {
        data: { title: RouteMeta.CONNECTION_IG_BUSINESS.TITLE },
        loadChildren: () => import('./routes/instagram-business/instagram-business.module').then((module) => module.InstagramBusinessModule),
        path: RouteMeta.CONNECTION_IG_BUSINESS.ROUTE,
        resolve: { document_data: DocumentResolver }
      },
      {
        data: { title: RouteMeta.CONNECTION_TWITTER_PROFILE.TITLE },
        loadChildren: () => import('./routes/twitter/twitter.module').then((module) => module.TwitterModule),
        path: RouteMeta.CONNECTION_TWITTER_PROFILE.ROUTE,
        resolve: { document_data: DocumentResolver }
      },
      {
        data: { title: RouteMeta.CONNECTION_LINKEDIN.TITLE },
        loadChildren: () => import('./routes/linkedin-page/linkedin-page.module').then((module) => module.LinkedInPageModule),
        path: RouteMeta.CONNECTION_LINKEDIN.ROUTE,
        resolve: { document_data: DocumentResolver }
      },
      {
        data: { title: RouteMeta.CONNECTION_LINKEDIN_PROFILE.TITLE },
        loadChildren: () => import('./routes/linkedin-profile/linkedin-profile.module').then((module) => module.LinkedInProfileModule),
        path: RouteMeta.CONNECTION_LINKEDIN_PROFILE.ROUTE,
        resolve: { document_data: DocumentResolver }
      },
      {
        data: { title: RouteMeta.CONNECTION_PROFILES.TITLE },
        loadChildren: () => import('./routes/profiles/profiles.module').then((module) => module.ProfilesModule),
        path: RouteMeta.CONNECTION_PROFILES.ROUTE,
        resolve: { document_data: DocumentResolver }
      }
    ],
    component: ConnectionComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ConnectionRoutingModule {}
