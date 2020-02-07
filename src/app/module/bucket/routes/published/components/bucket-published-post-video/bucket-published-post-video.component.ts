import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostFileInterface } from '@core/model/post/schedule.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published-post-video',
  templateUrl: './bucket-published-post-video.component.html',
  styleUrls: ['./bucket-published-post-video.component.scss'],
})
export class BucketPublishedPostVideoComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostVideos: PostFileInterface[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostVideos = changes.calendarPostVideos.currentValue;
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
  }
}
