import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IFbPostInsight } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-posts',
  styleUrls: ['./posts.component.css'],
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnChanges {
  @Input() posts!: IFbPostInsight;

  ngOnChanges (changes: SimpleChanges): void {
    this.posts = changes?.posts?.currentValue;
  }

  totalCount (input: number[]): number {
    return input && input.length > 0 ? input.reduce((acc, num) => acc + num) : 0;
  }

  engagementRate (engagements: number[] = [0], impressions: number[] = [0]): number {
    const engagement = this.totalCount(engagements);
    const impression = this.totalCount(impressions);

    return Math.floor((engagement / impression) * parseInt('100', 10));
  }
}
