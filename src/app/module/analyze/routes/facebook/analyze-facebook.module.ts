import { AnalyzeCardModule } from '@shared/module/analyze/analyze-card/analyze-card.module';
import { AnalyzeChartModule } from '@shared/module/analyze/analyze-chart/analyze-chart.module';
import { AnalyzeFacebookComponent } from './container/analyze-facebook.component';
import { AnalyzeFacebookRoutingModule } from './analyze-facebook-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FacebookDateSelectionComponent } from './components/facebook-date-selection/facebook-date-selection.component';
import { FacebookFacade } from './facade/analyze-facebook.facade';
import { FacebookProfileSelectionComponent } from './components/facebook-profile-selection/facebook-profile-selection.component';
import { FacebookRouteAudienceComponent } from './components/facebook-route-audience/facebook-route-audience.component';
import { FacebookRouteOverviewComponent } from './components/facebook-route-overview/facebook-route-overview.component';
import { FacebookRoutePostsComponent } from './components/facebook-route-posts/facebook-route-posts.component';
import { FacebookRoutesComponent } from './components/facebook-routes/facebook-routes.component';
import { FacebookTopToolbarComponent } from './components/facebook-top-toolbar/facebook-top-toolbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AnalyzeFacebookComponent,
    FacebookDateSelectionComponent,
    FacebookProfileSelectionComponent,
    FacebookRouteAudienceComponent,
    FacebookRouteOverviewComponent,
    FacebookRoutePostsComponent,
    FacebookRoutesComponent,
    FacebookTopToolbarComponent,
  ],
  imports: [AnalyzeCardModule, AnalyzeChartModule, AnalyzeFacebookRoutingModule, CalendarModule, CommonModule, DropdownModule],
  providers: [FacebookFacade],
})
export class AnalyzeFacebookModule {}
