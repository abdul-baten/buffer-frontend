import { ActivatedRoute } from '@angular/router';
import { BucketSavedFacade } from '../facade/bucket-saved.facade';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { I_DOCUMENT, I_POST } from '@core/model';
import { SubSink } from 'subsink';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-saved',
  templateUrl: './bucket-saved.component.html',
  styleUrls: ['./bucket-saved.component.scss'],
})
export class BucketSavedComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private bucketSavedFacade: BucketSavedFacade) {}

  ngOnInit() {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((data: I_DOCUMENT) => this.bucketSavedFacade.setDocumentTitle(data.title)),
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
