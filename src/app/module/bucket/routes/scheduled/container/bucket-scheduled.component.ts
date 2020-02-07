import { ActivatedRoute } from '@angular/router';
import { BucketScheduledFacade } from '../facade/bucket-scheduled.facade';
import { CalPostInterface } from '@core/model/post/schedule.model';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DocumentInterface } from '@core/model/document/document.model';
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
      this.activatedRoute.data.subscribe((data: DocumentInterface) =>
        this.bucketScheduledFacade.setDocumentTitle(data.title),
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
