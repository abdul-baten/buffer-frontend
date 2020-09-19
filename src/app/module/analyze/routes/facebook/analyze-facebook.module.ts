import { AnalyzeCardModule } from '@shared/module/analyze/analyze-card/analyze-card.module';
import { AnalyzeChartModule } from '@shared/module/analyze/analyze-chart/analyze-chart.module';
import { AnalyzeFacebookComponent } from './container/analyze-facebook.component';
import { AnalyzeFacebookRoutingModule } from './analyze-facebook-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FacebookFacade } from './facade/analyze-facebook.facade';
import { FacebookFilterComponent } from './components/facebook-filter/facebook-filter.component';
import { FacebookRouteAudienceComponent } from './components/facebook-route-audience/facebook-route-audience.component';
import { FacebookRouteOverviewComponent } from './components/facebook-route-overview/facebook-route-overview.component';
import { FacebookRoutePostsComponent } from './components/facebook-route-posts/facebook-route-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AnalyzeFacebookComponent,
    FacebookFilterComponent,
    FacebookRouteAudienceComponent,
    FacebookRouteOverviewComponent,
    FacebookRoutePostsComponent,
  ],
  imports: [
    AnalyzeCardModule,
    AnalyzeChartModule,
    AnalyzeFacebookRoutingModule,
    CalendarModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    ToolbarModule,
  ],
  providers: [FacebookFacade],
})
export class AnalyzeFacebookModule {}
