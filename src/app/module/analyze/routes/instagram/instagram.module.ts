import { AnalyzeCardModule } from '../../../../shared/analyze/analyze-card/analyze-card.module';
import { AnalyzeChartModule } from '../../../../shared/analyze/analyze-chart/analyze-chart.module';
import { AnalyzeInstagramComponent } from './container/instagram.component';
import { AnalyzeInstagramRoutingModule } from './instagram-routing.module';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InstagramFacade } from './facade/instagram.facade';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { NoDataFoundModule } from '../../../../shared/no-data-found/no-data-found.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OverviewComponent } from './components/overview/overview.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostTableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from '../../../../shared/header/toolbar/toolbar.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AnalyzeInstagramComponent,
    FilterComponent,
    OverviewComponent,
    PostTableComponent,
    PostsComponent,
  ],
  imports: [
    AnalyzeCardModule,
    AnalyzeChartModule,
    AnalyzeInstagramRoutingModule,
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
  providers: [InstagramFacade],
})
export class AnalyzeInstagramModule {}
