import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import type { IFbOverviewInsight } from 'src/app/core/model';

@Component({
  selector: 'buffer-audience',
  styleUrls: ['./audience.component.css'],
  templateUrl: './audience.component.html'
})
export class AudienceComponent implements OnChanges {
  @Input() insight!: IFbOverviewInsight;

  ngOnChanges (changes: SimpleChanges): void {
    this.insight = changes?.insight?.currentValue;
  }
}
