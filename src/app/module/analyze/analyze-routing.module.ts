import { DocumentResolver } from 'src/app/resolvers/document.resolver';
import { NgModule } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzeComponent } from './container/analyze.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyzeComponent,
    children: [
      {
        data: { title: PAGES.ANALYZE_FACEBOOK_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/facebook/analyze-facebook.module').then(m => m.AnalyzeFacebookModule),
        path: PAGES.ANALYZE_FACEBOOK_PAGE.PAGE_ROUTE,
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
