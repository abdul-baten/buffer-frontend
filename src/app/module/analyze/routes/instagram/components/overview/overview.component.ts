import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import type { IInstaInsight } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-overview',
  styleUrls: ['./overview.component.css'],
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnChanges {
  @Input() insight: Partial<IInstaInsight> = {};

  ngOnChanges (changes: SimpleChanges): void {
    this.insight = changes?.insight?.currentValue;
  }
}
