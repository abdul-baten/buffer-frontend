import { AnalyzeComponent } from './container/analyze.component';
import { DocumentResolver } from 'src/app/resolvers/document.resolver';
import { NgModule } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnalyzeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGES.ANALYZE_FACEBOOK_PAGE.PAGE_ROUTE,
      },
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
