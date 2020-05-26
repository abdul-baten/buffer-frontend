import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_POST_FILE } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published-post-video',
  templateUrl: './bucket-published-post-video.component.html',
  styleUrls: ['./bucket-published-post-video.component.scss'],
})
export class BucketPublishedPostVideoComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostVideos: I_POST_FILE[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostVideos = changes.calendarPostVideos.currentValue;
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
  }
}
