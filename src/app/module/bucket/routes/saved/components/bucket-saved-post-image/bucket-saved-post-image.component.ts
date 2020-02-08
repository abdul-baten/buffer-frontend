import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostFileInterface } from '@core/model/post/post.model';

@Component({
  selector: 'buffer--bucket-saved-post-image',
  templateUrl: './bucket-saved-post-image.component.html',
  styleUrls: ['./bucket-saved-post-image.component.scss'],
})
export class BucketSavedPostImageComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostImages: PostFileInterface[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
    this.calendarPostImages = changes.calendarPostImages.currentValue;
  }
}
