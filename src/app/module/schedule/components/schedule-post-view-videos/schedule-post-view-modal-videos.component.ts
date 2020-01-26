// Core Modules
import { Component, Input, SimpleChanges, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { PostFileInterface } from '@app/schedule/model/schedule.model';

// Third Party Modules

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
    this.postVideos = changes.postImageUrls.currentValue;
    this.postVideoSlideConfig = changes.postVideoSlideConfig.currentValue;
  }
}
