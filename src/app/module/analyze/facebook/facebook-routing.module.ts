import { FacebookComponent } from './container/facebook.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { PostsComponent } from './components/posts/posts.component';
import { AudienceComponent } from './components/audience/audience.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { VideoComponent } from './components/video/video.component';
import { AnalyzeFacebookResolver } from 'src/app/resolvers';
import { IFbOverviewInsight, IFbPerformanceInsight, IFbPostInsight, IFbVideoInsight } from 'src/app/core/model';
import { EFbInsightType } from 'src/app/core/enum';

const routes: Routes = [
  {
    children: [
      {
        component: OverviewComponent,
        data: { insight_type: EFbInsightType.OVERVIEW },
        path: 'overview/:id',
        resolve: { overview_data: AnalyzeFacebookResolver as unknown as AnalyzeFacebookResolver<IFbOverviewInsight> },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
      },
      {
        component: PostsComponent,
        data: { insight_type: EFbInsightType.POST },
        path: 'posts/:id',
        resolve: { overview_data: AnalyzeFacebookResolver as unknown as AnalyzeFacebookResolver<IFbPostInsight> },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
      },
      {
        component: AudienceComponent,
        data: { insight_type: EFbInsightType.AUDIENCE },
        path: 'audience/:id',
        resolve: { overview_data: AnalyzeFacebookResolver as unknown as AnalyzeFacebookResolver<IFbPostInsight> },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
      },
      {
        component: PerformanceComponent,
        data: { insight_type: EFbInsightType.PERFORMANCE },
        path: 'performance/:id',
        resolve: { overview_data: AnalyzeFacebookResolver as unknown as AnalyzeFacebookResolver<IFbPerformanceInsight> },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
      },
      {
        component: VideoComponent,
        data: { insight_type: EFbInsightType.VIDEO },
        path: 'videos/:id',
        resolve: { overview_data: AnalyzeFacebookResolver as unknown as AnalyzeFacebookResolver<IFbVideoInsight> },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
      }
    ],
    component: FacebookComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AnalyzeFacebookRoutingModule {}
