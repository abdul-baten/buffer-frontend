import { AnalyzeComponent } from './container/analyze.component';
import { AnalyzeFacade } from './facade/analyze.facade';
import { AnalyzeRoutingModule } from './analyze-routing.module';
import { AnalyzeTopRoutesComponent } from './components/analyze-top-routes/analyze-top-routes.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AnalyzeComponent, AnalyzeTopRoutesComponent],
  imports: [AnalyzeRoutingModule, ButtonModule, CommonModule, DashboardHeaderModule, RouterModule],
  providers: [AnalyzeFacade],
})
export class AnalyzeModule {}
