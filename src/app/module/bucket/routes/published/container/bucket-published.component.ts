import { ActivatedRoute } from '@angular/router';
import { BucketPublishedFacade } from '../facade/bucket-published.facade';
import { CalPostInterface } from '@core/model/post/schedule.model';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DocumentInterface } from '@core/model/document/document.model';
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
      this.activatedRoute.data.subscribe((data: DocumentInterface) =>
        this.bucketPublishedFacade.setDocumentTitle(data.title),
      ),
    );
  }

  trackByFn(index: number, postInfo: CalPostInterface) {
    console.warn(postInfo, index);
    return postInfo.id;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
