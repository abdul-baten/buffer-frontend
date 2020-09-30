import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_FB_VIDEOS } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--video',
  styleUrls: ['./video.component.scss'],
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnChanges {
  @Input() videos: I_FB_VIDEOS;

  ngOnChanges(changes: SimpleChanges): void {
    this.videos = changes?.videos?.currentValue;
  }
}
