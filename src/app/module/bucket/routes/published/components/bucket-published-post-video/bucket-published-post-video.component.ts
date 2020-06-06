import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_MEDIA } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published-post-video',
  templateUrl: './bucket-published-post-video.component.html',
  styleUrls: ['./bucket-published-post-video.component.scss'],
})
export class BucketPublishedPostVideoComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostVideos: I_MEDIA[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostVideos = changes.calendarPostVideos.currentValue;
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
  }
}
