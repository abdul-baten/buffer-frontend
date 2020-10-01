import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_FB_POSTS } from 'src/app/core/model';
import { FacebookFacade } from '../../facade/analyze-facebook.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--post-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class PostTableComponent implements OnChanges {
  @Input() posts: I_FB_POSTS;

  constructor(private readonly facade: FacebookFacade) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.posts = changes?.posts?.currentValue;
  }

  viewPost(url: string): void {
    this.facade.viewPost(url);
  }
}
