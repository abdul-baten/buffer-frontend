import { AnalyzeCardModule } from 'src/app/shared/analyze/analyze-card/analyze-card.module';
import { AnalyzeChartModule } from 'src/app/shared/analyze/analyze-chart/analyze-chart.module';
import { AnalyzeFacebookRoutingModule } from './facebook-routing.module';
import { AudienceComponent } from './components/audience/audience.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FacebookComponent } from './container/facebook.component';
import { FacebookFacade } from './facade/facebook.facade';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { NoDataFoundModule } from 'src/app/shared/no-data-found/no-data-found.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OverviewComponent } from './components/overview/overview.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostTableComponent } from './components/table/table.component';
import { SumPipeModule } from 'src/app/core/pipe';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'src/app/shared/header/toolbar/toolbar.module';
import { TooltipModule } from 'primeng/tooltip';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AudienceComponent,
    FacebookComponent,
    FilterComponent,
    OverviewComponent,
    PerformanceComponent,
    PostTableComponent,
    PostsComponent,
    VideoComponent
  ],
  imports: [
    AnalyzeCardModule,
    AnalyzeChartModule,
    AnalyzeFacebookRoutingModule,
    ButtonModule,
    CalendarModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    LazyLoadImageModule,
    NoDataFoundModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
    TooltipModule
  ],
  providers: [FacebookFacade, SumPipeModule]
})
export class AnalyzeFacebookModule {}
