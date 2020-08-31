import { AnalyzeCardComponent } from './container/analyze-card.component';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AnalyzeCardComponent],
  exports: [AnalyzeCardComponent],
  imports: [CommonModule, FieldsetModule],
})
export class AnalyzeCardModule {}
