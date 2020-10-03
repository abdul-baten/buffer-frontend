import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FacebookFacade } from '../../facade/facebook.facade';
import { I_FB_POST } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--post-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class PostTableComponent implements OnChanges {
  @Input() posts!: I_FB_POST[];

  constructor(private readonly facade: FacebookFacade) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.posts = changes?.posts?.currentValue;
  }

  viewPost(url: string): void {
    this.facade.viewPost(url);
  }

  trackBy(index: number, _hashTag: string): number {
    return index;
  }
}
