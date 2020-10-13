import { BucketComponent } from './container/bucket.component';
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
        redirectTo: RouteMeta.BUCKET_SAVED.ROUTE
      },
      {
        data: { title: RouteMeta.BUCKET_SCHEDULED.TITLE },
        loadChildren: () => import('./routes/scheduled/bucket-scheduled.module').then((module) => module.BucketScheduledModule),
        path: RouteMeta.BUCKET_SCHEDULED.ROUTE,
        resolve: { document_data: DocumentResolver },
        runGuardsAndResolvers: 'always'
      },
      {
        data: { title: RouteMeta.BUCKET_PUBLISHED.TITLE },
        loadChildren: () => import('./routes/published/bucket-published.module').then((module) => module.BucketPublishedModule),
        path: RouteMeta.BUCKET_PUBLISHED.ROUTE,
        resolve: { document_data: DocumentResolver },
        runGuardsAndResolvers: 'always'
      },
      {
        data: { title: RouteMeta.BUCKET_SAVED.TITLE },
        loadChildren: () => import('./routes/saved/bucket-saved.module').then((module) => module.BucketSavedModule),
        path: RouteMeta.BUCKET_SAVED.ROUTE,
        resolve: { document_data: DocumentResolver },
        runGuardsAndResolvers: 'always'
      }
    ],
    component: BucketComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class BucketRoutingModule {}
