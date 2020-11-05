import { AnalyzeCardComponent } from './container/analyze-card.component';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [AnalyzeCardComponent],
  exports: [AnalyzeCardComponent],
  imports: [CardModule, CommonModule, TooltipModule]
})
export class AnalyzeCardModule {}
