import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_INS_IG } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--posts',
  styleUrls: ['./posts.component.scss'],
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnChanges {
  @Input() insight: I_INS_IG;

  ngOnChanges(changes: SimpleChanges): void {
    this.insight = changes?.insight?.currentValue;
  }

  totalCount(totalData: number[]): number {
    return totalData && totalData.length > 0 ? totalData.reduce((acc, num) => acc + num) : 0;
  }

  engagementRate(engagements: number[], impressions: number[]): number {
    const engagement = this.totalCount(engagements);
    const impression = this.totalCount(impressions);

    return Math.floor((engagement / impression) * 100);
  }
}
