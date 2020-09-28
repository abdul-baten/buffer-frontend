import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_INS_IG_MEDIA } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--post-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})
export class PostTableComponent implements OnChanges {
  @Input() posts: I_INS_IG_MEDIA[];

  ngOnChanges(changes: SimpleChanges): void {
    this.posts = changes?.posts?.currentValue;
  }

  viewPost(url: string): void {
    window.open(url, '_blank');
  }
}
