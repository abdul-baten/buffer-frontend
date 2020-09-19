import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_INSIGHT } from '@core/model';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--facebook-route-overview',
  styleUrls: ['./facebook-route-overview.component.scss'],
  templateUrl: './facebook-route-overview.component.html',
})
export class FacebookRouteOverviewComponent implements OnChanges {
  @Input() insight$: Observable<I_INSIGHT>;

  ngOnChanges(changes: SimpleChanges): void {
    this.insight$ = changes.insight$.currentValue;
  }
}
