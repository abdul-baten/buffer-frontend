import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostFileInterface } from '@app/schedule/model/schedule.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--schedule-post-view-modal-videos',
  templateUrl: './schedule-post-view-modal-videos.component.html',
  styleUrls: ['./schedule-post-view-modal-videos.component.scss'],
})
export class SchedulePostViewModalVideosComponent implements OnChanges {
  @Input() postVideos: PostFileInterface[] = [];
  @Input() postVideoSlideConfig: any;

  ngOnChanges(changes: SimpleChanges) {
    this.postVideos = changes.postVideos.currentValue;
    this.postVideoSlideConfig = changes.postVideoSlideConfig.currentValue;
  }
}
