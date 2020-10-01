import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_INS_IG } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--overview',
  styleUrls: ['./overview.component.css'],
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnChanges {
  @Input() insight: I_INS_IG;

  ngOnChanges(changes: SimpleChanges): void {
    this.insight = changes?.insight?.currentValue;
  }
}
