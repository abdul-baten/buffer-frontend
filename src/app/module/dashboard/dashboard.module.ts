import { AnalyzeCardModule } from '@shared/module/analyze/analyze-card/analyze-card.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard.component';
import { DashboardFacade } from './facade/dashboard.facade';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { DashboardPostsOverviewComponent } from './components/dashboard-posts-overview/dashboard-posts-overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSocialPerformanceComponent } from './components/dashboard-social-performance/dashboard-social-performance.component';
import { DashboardSocialProfileOverviewComponent } from './components/dashboard-social-profile-overview/dashboard-social-profile-overview.component';
import { DashboardTopToolbarComponent } from './components/dashboard-top-toolbar/dashboard-top-toolbar.component';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { PostModalModule } from '@shared/module/modal/post-modal/post-modal.module';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { SocialProfileToolbarModule } from '@shared/module/social-profile/social-profile-toolbar/social-profile-toolbar.module';

import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPostsOverviewComponent,
    DashboardSocialPerformanceComponent,
    DashboardSocialProfileOverviewComponent,
    DashboardTopToolbarComponent,
  ],
  imports: [
    AnalyzeCardModule,
    CommonModule,
    DashboardHeaderModule,
    DashboardRoutingModule,
    FieldsetModule,
    LazyLoadImageModule,
    MatTableModule,
    PostModalModule,
    SocialProfileAddModule,
    SocialProfileToolbarModule,
    ScrollPanelModule,
  ],
  providers: [DashboardFacade],
})
export class DashboardModule {}
