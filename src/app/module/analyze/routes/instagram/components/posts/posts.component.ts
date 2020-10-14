import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IInstaInsight } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-posts',
  styleUrls: ['./posts.component.css'],
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnChanges {
  @Input() insight!: IInstaInsight;

  ngOnChanges (changes: SimpleChanges): void {
    this.insight = changes?.insight?.currentValue;
  }

  totalCount (total_data: number[]): number {
    return total_data && total_data.length > 0 ? total_data.reduce((acc, num) => acc + num) : 0;
  }

  engagementRate (engagements: number[], impressions: number[]): number {
    const engagement = this.totalCount(engagements);
    const impression = this.totalCount(impressions);

    return Math.floor((engagement / impression) * parseInt('100', 10));
  }
}
