import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_INS_FB } from '@core/model';

@Component({
  selector: 'buffer--audience',
  styleUrls: ['./audience.component.scss'],
  templateUrl: './audience.component.html',
})
export class AudienceComponent implements OnChanges {
  @Input() insight: I_INS_FB;

  ngOnChanges(changes: SimpleChanges): void {
    this.insight = changes?.insight?.currentValue;
  }
}
