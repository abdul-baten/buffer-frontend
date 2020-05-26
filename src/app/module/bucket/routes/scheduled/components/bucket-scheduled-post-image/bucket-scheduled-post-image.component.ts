import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_POST_FILE } from '@core/model';

@Component({
  selector: 'buffer--bucket-scheduled-post-image',
  templateUrl: './bucket-scheduled-post-image.component.html',
  styleUrls: ['./bucket-scheduled-post-image.component.scss'],
})
export class BucketScheduledPostImageComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostImages: I_POST_FILE[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
    this.calendarPostImages = changes.calendarPostImages.currentValue;
  }
}
