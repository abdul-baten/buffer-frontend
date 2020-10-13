import { AnalyzeChartComponent } from './container/analyze-chart.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [AnalyzeChartComponent],
  exports: [AnalyzeChartComponent],
  imports: [CommonModule, ButtonModule, FieldsetModule, HighchartsChartModule, TooltipModule]
})
export class AnalyzeChartModule {}
