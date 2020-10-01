import { AnalyzeCardModule } from '../../shared/analyze/analyze-card/analyze-card.module';
import { AnalyzeChartModule } from '../../shared/analyze/analyze-chart/analyze-chart.module';
import { AnalyzeFacebookComponent } from './container/analyze-facebook.component';
import { AnalyzeFacebookRoutingModule } from './analyze-facebook-routing.module';
import { AudienceComponent } from './components/audience/audience.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FacebookFacade } from './facade/analyze-facebook.facade';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { NoDataFoundModule } from '../../shared/no-data-found/no-data-found.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OverviewComponent } from './components/overview/overview.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostTableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from '../../shared/header/toolbar/toolbar.module';
import { TooltipModule } from 'primeng/tooltip';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AnalyzeFacebookComponent,
    AudienceComponent,
    FilterComponent,
    OverviewComponent,
    PerformanceComponent,
    PostTableComponent,
    PostsComponent,
    VideoComponent,
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
    TooltipModule,
  ],
  providers: [FacebookFacade],
})
export class AnalyzeFacebookModule {}
