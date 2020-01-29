// Core Modules
import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { PostFileInterface } from '@app/schedule/model/schedule.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--post-details-modal-image',
  templateUrl: './post-details-modal-image.component.html',
  styleUrls: ['./post-details-modal-image.component.scss'],
})
export class PostDetailsModalImageComponent implements OnChanges {
  @Input() postImages: PostFileInterface[] = [];
  @Input() postImageSlideConfig: any;

  ngOnChanges(changes: SimpleChanges) {
    this.postImages = changes.postImages.currentValue;
    this.postImageSlideConfig = changes.postImageSlideConfig.currentValue;
  }
}
