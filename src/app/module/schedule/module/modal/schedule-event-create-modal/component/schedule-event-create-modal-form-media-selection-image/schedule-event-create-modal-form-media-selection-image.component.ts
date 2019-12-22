// Core Modules
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Output, EventEmitter } from '@angular/core';

// Third Party Modules
import { of, noop } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-media-selection-image',
  templateUrl: './schedule-event-create-modal-form-media-selection-image.component.html',
  styleUrls: ['./schedule-event-create-modal-form-media-selection-image.component.scss']
})
export class ScheduleEventCreateModalFormMediaSelectionImageComponent {
  filesAdded = 0;
  mediaMaxFilesReached = false;
  config: DropzoneConfigInterface;

  @Output() enableNextButton = new EventEmitter<boolean>();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.config = {
      maxFiles: 5,
      autoQueue: true,
      clickable: true,
      autoReset: null,
      maxFilesize: 100,
      errorReset: null,
      cancelReset: null,
      parallelUploads: 1,
      addRemoveLinks: false,
      uploadMultiple: false,
      autoProcessQueue: true,
      createImageThumbnails: true,
      url: 'https://httpbin.org/post',
      acceptedFiles: 'image/jpg,image/png,image/jpeg',
      dictDefaultMessage:
        '<i class="material-icons">add_to_photos</i><span class="buffer--font-size-sm buffer--margin-top-2">Drag or click here to upload upto 5 images</span>'
    };
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
