import { AnalyzeChartComponent } from './container/analyze-chart.component';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [AnalyzeChartComponent],
  exports: [AnalyzeChartComponent],
  imports: [CommonModule, ButtonModule, ChartModule, FieldsetModule],
})
export class AnalyzeChartModule {}
