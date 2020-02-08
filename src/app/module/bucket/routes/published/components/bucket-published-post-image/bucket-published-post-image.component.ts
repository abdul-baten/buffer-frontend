import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostFileInterface } from '@core/model/post/post.model';

@Component({
  selector: 'buffer--bucket-published-post-image',
  templateUrl: './bucket-published-post-image.component.html',
  styleUrls: ['./bucket-published-post-image.component.scss'],
})
export class BucketPublishedPostImageComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostImages: PostFileInterface[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
    this.calendarPostImages = changes.calendarPostImages.currentValue;
  }
}
