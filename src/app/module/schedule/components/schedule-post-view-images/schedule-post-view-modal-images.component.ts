// Core Modules
import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { PostFileInterface } from '@app/schedule/model/schedule.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--schedule-post-view-modal-images',
  templateUrl: './schedule-post-view-modal-images.component.html',
  styleUrls: ['./schedule-post-view-modal-images.component.scss'],
})
export class SchedulePostViewModalImagesComponent implements OnChanges {
  @Input() postImages: PostFileInterface[] = [];
  @Input() postImageSlideConfig: any;

  ngOnChanges(changes: SimpleChanges) {
    this.postImages = changes.postImages.currentValue;
    this.postImageSlideConfig = changes.postImageSlideConfig.currentValue;
  }
}
