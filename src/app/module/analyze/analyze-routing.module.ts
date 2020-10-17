import { AnalyzeComponent } from './container/analyze.component';
import { AnalyzeFacebookResolver, DocumentResolver } from 'src/app/resolvers';
import { NgModule } from '@angular/core';
import { RouteMeta } from 'src/app/core/constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    children: [
      {
        data: { title: RouteMeta.ANALYZE_FACEBOOK.TITLE },
        loadChildren: () => import('./routes/facebook/facebook.module').then((module) => module.AnalyzeFacebookModule),
        path: RouteMeta.ANALYZE_FACEBOOK.ROUTE,
        resolve: {
          document_data: DocumentResolver,
          insight_data: AnalyzeFacebookResolver
        },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
      },
      {
        data: { title: RouteMeta.ANALYZE_INSTAGRAM.TITLE },
        loadChildren: () => import('./routes/instagram/instagram.module').then((module) => module.AnalyzeInstagramModule),
        path: RouteMeta.ANALYZE_INSTAGRAM.ROUTE,
        resolve: { document_data: DocumentResolver }
      }
    ],
    component: AnalyzeComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AnalyzeRoutingModule {}
