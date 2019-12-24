// Core Modules
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Output, EventEmitter } from '@angular/core';

// Third Party Modules
import { of, noop } from 'rxjs';
import { tap, delay, filter, defaultIfEmpty } from 'rxjs/operators';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Enums
import { POST_TYPE } from 'src/app/module/schedule/enum/schedule-event-create-modal.enum';

// Facades
import { ScheduleFacade } from 'src/app/module/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-media-selection',
  templateUrl: './schedule-event-create-modal-form-media-selection.component.html',
  styleUrls: ['./schedule-event-create-modal-form-media-selection.component.scss']
})
export class ScheduleEventCreateModalFormMediaSelectionComponent {
  filesAdded = 0;
  mediaMaxFilesReached = false;
  config: DropzoneConfigInterface;

  @Output() enableNextButton = new EventEmitter<boolean>();

  constructor(private scheduleFacade: ScheduleFacade, @Inject(DOCUMENT) private document: Document) {
    this.scheduleFacade
      .getPostType()
      .pipe(
        defaultIfEmpty(POST_TYPE.TEXT),
        filter((type: POST_TYPE) => type === POST_TYPE.IMAGE || type === POST_TYPE.VIDEO),
        tap((type: POST_TYPE) => {
          this.config = this.scheduleFacade.generateDropZoneConfig(type);
        })
      )
      .subscribe(noop);
  }

  onUploadInit(args: any): void {
    console.log('onUploadInit:', args);

    of(true)
      .pipe(
        delay(0),
        tap(() => {
          this.config.previewTemplate = this.document.querySelector('#template').innerHTML;
          this.config.previewsContainer = this.document.querySelector('#previews');
        })
      )
      .subscribe(noop);
  }

  onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args[0].name);
  }

  onAddedFile(addEvent: any): void {
    this.filesAdded += 1;

    console.log(addEvent);

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
