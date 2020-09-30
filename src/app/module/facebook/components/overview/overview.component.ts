import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_FB_OVERVIEW } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnChanges {
  @Input() overview: I_FB_OVERVIEW;

  ngOnChanges(changes: SimpleChanges): void {
    this.overview = changes?.overview?.currentValue;
  }
}
