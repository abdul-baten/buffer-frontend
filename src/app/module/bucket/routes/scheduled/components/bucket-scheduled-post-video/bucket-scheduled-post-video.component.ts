import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_POST_FILE } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-scheduled-post-video',
  templateUrl: './bucket-scheduled-post-video.component.html',
  styleUrls: ['./bucket-scheduled-post-video.component.scss'],
})
export class BucketScheduledPostVideoComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostVideos: I_POST_FILE[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostVideos = changes.calendarPostVideos.currentValue;
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
  }
}
