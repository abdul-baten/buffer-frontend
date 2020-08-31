import { AnalyzeComponent } from './container/analyze.component';
import { AnalyzeFacade } from './facade/analyze.facade';
import { AnalyzeRoutingModule } from './analyze-routing.module';
import { AnalyzeTopRoutesComponent } from './components/analyze-top-routes/analyze-top-routes.component';
import { AnalyzeTopToolbarComponent } from './components/analyze-top-toolbar/analyze-top-toolbar.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileToolbarModule } from '@shared/module/social-profile/social-profile-toolbar/social-profile-toolbar.module';

@NgModule({
  declarations: [AnalyzeComponent, AnalyzeTopToolbarComponent, AnalyzeTopRoutesComponent],
  imports: [AnalyzeRoutingModule, ButtonModule, CommonModule, DashboardHeaderModule, RouterModule, SocialProfileToolbarModule],
  providers: [AnalyzeFacade],
})
export class AnalyzeModule {}
