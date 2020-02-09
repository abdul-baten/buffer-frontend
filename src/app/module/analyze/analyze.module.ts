import { AnalyzeComponent } from './container/analyze.component';
import { AnalyzeFacade } from './facade/analyze.facade';
import { AnalyzeRoutingModule } from './analyze-routing.module';
import { AnalyzeTopToolbarComponent } from './components/analyze-top-toolbar/analyze-top-toolbar.component';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { NgModule } from '@angular/core';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { SocialProfileListModule } from '@shared/module/social-profile/social-profile-list/social-profile-list.module';
import { SocialProfileToolbarModule } from '@shared/module/social-profile/social-profile-toolbar/social-profile-toolbar.module';

@NgModule({
  declarations: [AnalyzeComponent, AnalyzeTopToolbarComponent],
  imports: [
    AnalyzeRoutingModule,
    CommonModule,
    DashboardHeaderModule,
    SocialProfileAddModule,
    SocialProfileListModule,
    SocialProfileToolbarModule,
  ],
  providers: [AnalyzeFacade],
})
export class AnalyzeModule {}
