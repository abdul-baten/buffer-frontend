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
