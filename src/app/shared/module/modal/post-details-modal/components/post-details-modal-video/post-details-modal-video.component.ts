import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_POST_FILE } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--post-details-modal-video',
  templateUrl: './post-details-modal-video.component.html',
  styleUrls: ['./post-details-modal-video.component.scss'],
})
export class PostDetailsModalVideoComponent implements OnChanges {
  @Input() postVideos: I_POST_FILE[] = [];
  @Input() postVideoSlideConfig: any;

  ngOnChanges(changes: SimpleChanges) {
    this.postVideos = changes.postVideos.currentValue;
    this.postVideoSlideConfig = changes.postVideoSlideConfig.currentValue;
  }
}
