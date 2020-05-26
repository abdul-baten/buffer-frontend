import { ActivatedRoute } from '@angular/router';
import { BucketPublishedFacade } from '../facade/bucket-published.facade';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { I_DOCUMENT, I_POST } from '@core/model';
import { SubSink } from 'subsink';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published',
  templateUrl: './bucket-published.component.html',
  styleUrls: ['./bucket-published.component.scss'],
})
export class BucketPublishedComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private bucketPublishedFacade: BucketPublishedFacade) {}

  ngOnInit() {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((data: I_DOCUMENT) => this.bucketPublishedFacade.setDocumentTitle(data.title)),
    );
  }

  trackByFn(index: number, postInfo: I_POST) {
    console.warn(postInfo, index);
    return postInfo.id;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
