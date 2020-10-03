import { AnalyzeComponent } from './container/analyze.component';
import { AnalyzeFacebookResolver, DocumentResolver } from 'src/app/resolvers';
import { NgModule } from '@angular/core';
import { PAGES } from 'src/app/core/constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnalyzeComponent,
    children: [
      {
        data: { title: PAGES.ANALYZE_FACEBOOK_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/facebook/facebook.module').then((m) => m.AnalyzeFacebookModule),
        path: PAGES.ANALYZE_FACEBOOK_PAGE.PAGE_ROUTE,
        resolve: { insightData: AnalyzeFacebookResolver, documentData: DocumentResolver },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
      },
      {
        data: { title: PAGES.ANALYZE_INSTAGRAM_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/instagram/instagram.module').then((m) => m.AnalyzeInstagramModule),
        path: PAGES.ANALYZE_INSTAGRAM_PAGE.PAGE_ROUTE,
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
export class AnalyzeRoutingModule {}
