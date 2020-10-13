import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import type { IInstaMediaInsight } from 'src/app/core/model';
import type { InstagramFacade } from '../../facade/instagram.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-post-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html'
})
export class PostTableComponent implements OnChanges {
  @Input() posts: IInstaMediaInsight[] = [];

  constructor (private readonly facade: InstagramFacade) {}

  ngOnChanges (changes: SimpleChanges): void {
    this.posts = changes?.posts?.currentValue;
  }

  public viewPost (url: string): void {
    this.facade.viewPost(url);
  }
}
