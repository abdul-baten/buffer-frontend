import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FacebookFacade } from '../../facade/facebook.facade';
import { IFbSingleVideoInsight } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-video-table',
  styleUrls: ['./video-table.component.css'],
  templateUrl: './video-table.component.html'
})
export class VideoTableComponent implements OnChanges {
  @Input() single_video!: IFbSingleVideoInsight[];

  constructor (private readonly facade: FacebookFacade) {}

  ngOnChanges (changes: SimpleChanges): void {
    this.single_video = changes?.single_video?.currentValue;
  }

  viewPost (url: string): void {
    this.facade.viewPost(`https://www.facebook.com/${url}`);
  }

  trackBy (index: number): number {
    return index;
  }
}
