import { ActivatedRoute } from '@angular/router';
import { BucketScheduledFacade } from '../facade/bucket-scheduled.facade';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { I_DOCUMENT, I_POST } from '@core/model';
import { SubSink } from 'subsink';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-scheduled',
  templateUrl: './bucket-scheduled.component.html',
  styleUrls: ['./bucket-scheduled.component.scss'],
})
export class BucketScheduledComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private bucketScheduledFacade: BucketScheduledFacade) {}

  ngOnInit() {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((data: I_DOCUMENT) => this.bucketScheduledFacade.setDocumentTitle(data.title)),
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
