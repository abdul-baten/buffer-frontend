import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IFbVideoInsight } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-video',
  styleUrls: ['./video.component.css'],
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnChanges {
  @Input() videos!: IFbVideoInsight;

  ngOnChanges (changes: SimpleChanges): void {
    this.videos = changes?.videos?.currentValue;
  }
}
