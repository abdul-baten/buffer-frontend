import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import type { IFbPerformanceInsight } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-performance',
  styleUrls: ['./performance.component.css'],
  templateUrl: './performance.component.html'
})
export class PerformanceComponent implements OnChanges {
  @Input() performance!: IFbPerformanceInsight;

  ngOnChanges (changes: SimpleChanges): void {
    this.performance = changes?.performance?.currentValue;
  }
}
