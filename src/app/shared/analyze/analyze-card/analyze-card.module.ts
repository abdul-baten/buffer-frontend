import { AnalyzeCardComponent } from './container/analyze-card.component';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [AnalyzeCardComponent],
  exports: [AnalyzeCardComponent],
  imports: [CommonModule, FieldsetModule, TooltipModule]
})
export class AnalyzeCardModule {}
