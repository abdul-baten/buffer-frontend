import { Component, OnInit } from '@angular/core';
import { VideoFacade } from '../facade/video.facade';

@Component({
  selector: 'buffer--video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  constructor(private readonly videoFacade: VideoFacade) {}

  ngOnInit(): void {
    this.updateMetaTag();
  }

  updateMetaTag(): void {
    this.videoFacade.updateMetaTag('descriptions', 'nothing serious');
  }
}
