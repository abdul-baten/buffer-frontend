import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_MEDIA } from '@core/model';

@Component({
  selector: 'buffer--bucket-saved-post-image',
  templateUrl: './bucket-saved-post-image.component.html',
  styleUrls: ['./bucket-saved-post-image.component.scss'],
})
export class BucketSavedPostImageComponent implements OnChanges {
  @Input() calendarPostSlideConfig: any;
  @Input() calendarPostImages: I_MEDIA[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostSlideConfig = changes.calendarPostSlideConfig.currentValue;
    this.calendarPostImages = changes.calendarPostImages.currentValue;
  }
}
