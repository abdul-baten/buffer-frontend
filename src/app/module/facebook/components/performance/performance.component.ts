import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_FB_PERFORMANCE } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--performance',
  styleUrls: ['./performance.component.scss'],
  templateUrl: './performance.component.html',
})
export class PerformanceComponent implements OnChanges {
  @Input() performance: I_FB_PERFORMANCE;

  ngOnChanges(changes: SimpleChanges): void {
    this.performance = changes?.performance?.currentValue;
  }
}
