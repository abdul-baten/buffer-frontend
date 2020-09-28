import { AnalyzeComponent } from './container/analyze.component';
import { AnalyzeFacade } from './facade/analyze.facade';
import { AnalyzeRoutingModule } from './analyze-routing.module';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AnalyzeComponent],
  imports: [AnalyzeRoutingModule, ButtonModule, CommonModule, RouterModule],
  providers: [AnalyzeFacade],
})
export class AnalyzeModule {}
