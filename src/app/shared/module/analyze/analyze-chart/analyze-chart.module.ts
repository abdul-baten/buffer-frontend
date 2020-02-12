import { AnalyzeChartComponent } from './container/analyze-chart.component';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [AnalyzeChartComponent],
  exports: [AnalyzeChartComponent],
  imports: [CommonModule, HighchartsChartModule, MatIconModule],
})
export class AnalyzeChartModule {}
