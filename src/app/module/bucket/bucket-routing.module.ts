import { BucketComponent } from './container/bucket.component';
import { DocumentResolver } from 'src/app/resolvers/document.resolver';
import { NgModule } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BucketComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGES.BUCKET_SAVED_PAGE.PAGE_ROUTE,
      },
      {
        data: { title: PAGES.BUCKET_SCHEDULED_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/scheduled/bucket-scheduled.module').then(m => m.BucketScheduledModule),
        path: PAGES.BUCKET_SCHEDULED_PAGE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
        runGuardsAndResolvers: 'always',
      },
      {
        data: { title: PAGES.BUCKET_PUBLISHED_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/published/bucket-published.module').then(m => m.BucketPublishedModule),
        path: PAGES.BUCKET_PUBLISHED_PAGE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
        runGuardsAndResolvers: 'always',
      },
      {
        data: { title: PAGES.BUCKET_SAVED_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/saved/bucket-saved.module').then(m => m.BucketSavedModule),
        path: PAGES.BUCKET_SAVED_PAGE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
        runGuardsAndResolvers: 'always',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BucketRoutingModule {}
