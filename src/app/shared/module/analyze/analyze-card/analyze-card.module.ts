import { AnalyzeCardComponent } from './container/analyze-card.component';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AnalyzeCardComponent],
  exports: [AnalyzeCardComponent],
  imports: [CommonModule, MatTooltipModule, FieldsetModule],
})
export class AnalyzeCardModule {}
