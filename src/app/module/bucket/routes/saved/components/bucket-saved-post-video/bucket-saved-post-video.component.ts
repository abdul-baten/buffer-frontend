import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_POST } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-saved-post-video',
  templateUrl: './bucket-saved-post-video.component.html',
  styleUrls: ['./bucket-saved-post-video.component.scss'],
})
export class BucketSavedPostVideoComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostVideos: I_POST[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostVideos = changes.calendarPostVideos.currentValue;
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
  }
}
