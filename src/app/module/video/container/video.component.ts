import { Component, OnInit } from '@angular/core';
import type { VideoFacade } from '../facade/video.facade';

@Component({
  selector: 'buffer-video',
  styleUrls: ['./video.component.css'],
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit {
  constructor (private readonly videoFacade: VideoFacade) {}

  ngOnInit (): void {
    this.updateMetaTag();
  }

  public updateMetaTag (): void {
    this.videoFacade.updateMetaTag('descriptions', 'nothing serious');
  }
}
