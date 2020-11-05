import { AnalyzeChartComponent } from './container/analyze-chart.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [AnalyzeChartComponent],
  exports: [AnalyzeChartComponent],
  imports: [CardModule, CommonModule, ButtonModule, HighchartsChartModule, TooltipModule]
})
export class AnalyzeChartModule {}
