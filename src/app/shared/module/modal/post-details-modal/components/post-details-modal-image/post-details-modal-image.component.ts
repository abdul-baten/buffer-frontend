import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_MEDIA } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--post-details-modal-image',
  templateUrl: './post-details-modal-image.component.html',
  styleUrls: ['./post-details-modal-image.component.scss'],
})
export class PostDetailsModalImageComponent implements OnChanges {
  @Input() postImages: I_MEDIA[] = [];
  @Input() postImageSlideConfig: any;

  ngOnChanges(changes: SimpleChanges) {
    this.postImages = changes.postImages.currentValue;
    this.postImageSlideConfig = changes.postImageSlideConfig.currentValue;
  }
}
