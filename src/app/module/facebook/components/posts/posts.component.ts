import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_FB_POSTS } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--posts',
  styleUrls: ['./posts.component.css'],
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnChanges {
  @Input() posts: I_FB_POSTS;

  ngOnChanges(changes: SimpleChanges): void {
    this.posts = changes?.posts?.currentValue;
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
