import { AnalyzeCardModule } from '@shared/module/analyze/analyze-card/analyze-card.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard.component';
import { DashboardFacade } from './facade/dashboard.facade';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { DashboardPostsOverviewComponent } from './components/dashboard-posts-overview/dashboard-posts-overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSocialPerformanceComponent } from './components/dashboard-social-performance/dashboard-social-performance.component';
import { DashboardSocialProfileOverviewComponent } from './components/dashboard-social-profile-overview/dashboard-social-profile-overview.component';
import { DashboardSubToolbarComponent } from './components/dashboard-sub-toolbar/dashboard-sub-toolbar.component';
import { DashboardTopToolbarComponent } from './components/dashboard-top-toolbar/dashboard-top-toolbar.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { PostCreateModalModule } from '@shared/module/modal/post-create-modal/post-create-modal.module';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { SocialProfileToolbarModule } from '@shared/module/social-profile/social-profile-toolbar/social-profile-toolbar.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPostsOverviewComponent,
    DashboardSocialPerformanceComponent,
    DashboardSocialProfileOverviewComponent,
    DashboardSubToolbarComponent,
    DashboardTopToolbarComponent,
  ],
  imports: [
    AnalyzeCardModule,
    CommonModule,
    DashboardHeaderModule,
    DashboardRoutingModule,
    LazyLoadImageModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatTooltipModule,
    PostCreateModalModule,
    SocialProfileAddModule,
    SocialProfileToolbarModule,
  ],
  providers: [DashboardFacade],
})
export class DashboardModule {}
