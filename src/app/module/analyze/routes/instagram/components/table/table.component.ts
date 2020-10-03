import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_INS_IG_MEDIA } from 'src/app/core/model';
import { InstagramFacade } from '../../facade/instagram.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--post-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class PostTableComponent implements OnChanges {
  @Input() posts: I_INS_IG_MEDIA[] = [];

  constructor(private readonly facade: InstagramFacade) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.posts = changes?.posts?.currentValue;
  }

  viewPost(url: string): void {
    this.facade.viewPost(url);
  }
}
