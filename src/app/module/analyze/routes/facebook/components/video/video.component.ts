import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_INS_FB } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--video',
  styleUrls: ['./video.component.scss'],
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnChanges {
  @Input() insight: I_INS_FB;

  ngOnChanges(changes: SimpleChanges): void {
    this.insight = changes?.insight?.currentValue;
  }
}
