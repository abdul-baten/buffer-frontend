import { AnalyzeCardComponent } from './container/analyze-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AnalyzeCardComponent],
  exports: [AnalyzeCardComponent],
  imports: [CommonModule, MatIconModule, MatTooltipModule],
})
export class AnalyzeCardModule {}
