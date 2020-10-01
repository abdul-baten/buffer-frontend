import { AnalyzeCardModule } from '../../shared/analyze/analyze-card/analyze-card.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard.component';
import { DashboardFacade } from './facade/dashboard.facade';
import { DashboardHeaderModule } from '../../shared/header/dashboard-header/dashboard-header.module';
import { DashboardPostsOverviewComponent } from './components/dashboard-posts-overview/dashboard-posts-overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSocialPerformanceComponent } from './components/dashboard-social-performance/dashboard-social-performance.component';
import { DashboardSocialProfileOverviewComponent } from './components/dashboard-social-profile-overview/dashboard-social-profile-overview.component';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '../../shared/header/toolbar/toolbar.module';

@NgModule({
  declarations: [DashboardComponent, DashboardPostsOverviewComponent, DashboardSocialPerformanceComponent, DashboardSocialProfileOverviewComponent],
  imports: [AnalyzeCardModule, CommonModule, DashboardHeaderModule, DashboardRoutingModule, FieldsetModule, LazyLoadImageModule, ToolbarModule],
  providers: [DashboardFacade],
})
export class DashboardModule {}
