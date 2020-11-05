import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FacebookFacade } from '../../facade/facebook.facade';
import { IFbSinglePostInsight } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-post-table',
  styleUrls: ['./post-table.component.css'],
  templateUrl: './post-table.component.html'
})
export class PostTableComponent implements OnChanges {
  @Input() single_posts!: IFbSinglePostInsight[];

  constructor (private readonly facade: FacebookFacade) {}

  ngOnChanges (changes: SimpleChanges): void {
    this.single_posts = changes.single_posts.currentValue;
  }

  viewPost (url: string): void {
    this.facade.viewPost(url);
  }

  trackBy (index: number): number {
    return index;
  }
}
