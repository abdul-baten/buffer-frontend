import { Component, EventEmitter, HostListener, Inject, OnDestroy, Output } from '@angular/core';
import { defaultIfEmpty, delay, filter, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { E_POST_TYPE } from '@core/enum';
import { noop, of } from 'rxjs';
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
  config: DropzoneConfigInterface;

  private subscriptions$ = new SubSink();

  @Output() enableNextButton = new EventEmitter<boolean>();

  constructor(private postCreateModalFacade: PostCreateModalFacade, @Inject(DOCUMENT) private document: Document) {
    const postType = this.postCreateModalFacade.getPostType().pipe(
      defaultIfEmpty(E_POST_TYPE.TEXT),
      filter((type: E_POST_TYPE) => type === E_POST_TYPE.IMAGE || type === E_POST_TYPE.VIDEO),
      tap((type: E_POST_TYPE) => {
        this.config = this.postCreateModalFacade.generateDropZoneConfig(type);
      }),
    );
    this.subscriptions$.add(postType.subscribe(noop));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  onUploadInit(args: any): void {
    console.log('onUploadInit:', args);

    const dzPreview = of(true).pipe(
      delay(0),
      tap(() => {
        this.config.previewTemplate = this.document.querySelector('#template').innerHTML;
        this.config.previewsContainer = this.document.querySelector('#previews');
      }),
    );

    this.subscriptions$.add(dzPreview.subscribe(noop));
  }

  onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args[0].name);
  }

  onAddedFile(addPost: any): void {
    this.filesAdded += 1;

    console.log(addPost);

    this.enableNextButton.emit(false);
  }

  onRemovedFile(): void {
    this.filesAdded -= 1;
    this.mediaMaxFilesReached = true ? false : true;
    if (this.filesAdded === 0) {
      this.enableNextButton.emit(true);
    }
  }

  onMaxFilesReached(): void {
    this.mediaMaxFilesReached = true;
  }
}
