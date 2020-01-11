// Core Modules
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';

// Third Party Modules
import { of, noop } from 'rxjs';
import { SubSink } from 'subsink';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { tap, delay, filter, defaultIfEmpty } from 'rxjs/operators';

// Enums
import { POST_TYPE } from '@app/schedule/enum/schedule-post-create-modal.enum';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-post-create-modal-form-media-selection',
  templateUrl: './schedule-post-create-modal-form-media-selection.component.html',
  styleUrls: ['./schedule-post-create-modal-form-media-selection.component.scss']
})
export class SchedulePostCreateModalFormMediaSelectionComponent implements OnDestroy {
  filesAdded = 0;
  mediaMaxFilesReached = false;
  config: DropzoneConfigInterface;

  private subscriptions$ = new SubSink();

  @Output() enableNextButton = new EventEmitter<boolean>();

  constructor(private scheduleFacade: ScheduleFacade, @Inject(DOCUMENT) private document: Document) {
    const postType = this.scheduleFacade.getPostType().pipe(
      defaultIfEmpty(POST_TYPE.TEXT),
      filter((type: POST_TYPE) => type === POST_TYPE.IMAGE || type === POST_TYPE.VIDEO),
      tap((type: POST_TYPE) => {
        this.config = this.scheduleFacade.generateDropZoneConfig(type);
      })
    );
    this.subscriptions$.add(postType.subscribe(noop));
  }

  onUploadInit(args: any): void {
    console.log('onUploadInit:', args);

    const dzPreview = of(true).pipe(
      delay(0),
      tap(() => {
        this.config.previewTemplate = this.document.querySelector('#template').innerHTML;
        this.config.previewsContainer = this.document.querySelector('#previews');
      })
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

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
