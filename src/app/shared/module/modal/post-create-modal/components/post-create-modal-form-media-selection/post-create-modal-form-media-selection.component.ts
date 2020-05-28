import { Component, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { defaultIfEmpty, filter, tap } from 'rxjs/operators';
import { E_POST_TYPE } from '@core/enum';
import { noop } from 'rxjs';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-create-modal-form-media-selection',
  templateUrl: './post-create-modal-form-media-selection.component.html',
  styleUrls: ['./post-create-modal-form-media-selection.component.scss'],
})
export class PostCreateModalFormMediaSelectionComponent implements OnDestroy {
  filesAdded = 0;
  mediaMaxFilesReached = false;
  filePondOptions: any;

  private subscriptions$ = new SubSink();

  @Output() enableNextButton = new EventEmitter<boolean>();

  constructor(private postCreateModalFacade: PostCreateModalFacade) {
    const postType = this.postCreateModalFacade.getPostType().pipe(
      defaultIfEmpty(E_POST_TYPE.TEXT),
      filter((type: E_POST_TYPE) => type === E_POST_TYPE.IMAGE || type === E_POST_TYPE.VIDEO),
      tap((type: E_POST_TYPE) => {
        this.filePondOptions = this.postCreateModalFacade.generateDropZoneConfig(type);
      }),
    );
    this.subscriptions$.add(postType.subscribe(noop));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
