import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_INS_FB } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--performance',
  styleUrls: ['./performance.component.scss'],
  templateUrl: './performance.component.html',
})
export class PerformanceComponent implements OnChanges {
  @Input() insight: I_INS_FB;

  ngOnChanges(changes: SimpleChanges): void {
    this.insight = changes?.insight?.currentValue;
  }
}
