// Core Modules
import { Component, Inject, Output, EventEmitter } from '@angular/core';

// Third Party Modules
import { of, noop } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { tap, delay } from 'rxjs/operators';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-media-selection-video',
  templateUrl: './schedule-event-create-modal-form-media-selection-video.component.html',
  styleUrls: ['./schedule-event-create-modal-form-media-selection-video.component.scss']
})
export class ScheduleEventCreateModalFormMediaSelectionVideoComponent {
  filesAdded = 0;
  mediaMaxFilesReached = false;
  config: DropzoneConfigInterface;

  videoThumbnail: string;
  videoUploaded = false;

  @Output() enableNextButton = new EventEmitter<boolean>();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.config = {
      maxFiles: 1,
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
      acceptedFiles: 'video/mp4',
      dictDefaultMessage:
        '<i class="material-icons">add_to_photos</i><span class="buffer--font-size-sm buffer--margin-top-2">Drag or click here to upload</span>'
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
    this.videoUploaded = true;

    this.generateThumbnail(args[0]).then(thumbnail => {
      this.videoThumbnail = thumbnail;
    });
  }

  onAddedFile(addEvent: any): void {
    this.filesAdded += 1;
    this.videoUploaded = false;

    console.log('onUploadSuccess:', addEvent);

    this.enableNextButton.emit(false);
  }

  onRemovedFile(): void {
    this.filesAdded -= 1;
    this.videoThumbnail = '';
    this.mediaMaxFilesReached = true ? false : true;
    if (this.filesAdded) {
      this.enableNextButton.emit(true);
    }
  }

  onMaxFilesReached(): void {
    this.mediaMaxFilesReached = true;
  }

  public generateThumbnail(videoFile: Blob): Promise<string> {
    const video: HTMLVideoElement = this.document.createElement('video');
    const canvas: HTMLCanvasElement = this.document.createElement('canvas');
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    return new Promise<string>((resolve, reject) => {
      canvas.addEventListener('error', reject);
      video.addEventListener('error', reject);
      video.addEventListener('canplay', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        resolve(canvas.toDataURL());
      });
      if (videoFile.type) {
        video.setAttribute('type', videoFile.type);
      }
      video.preload = 'auto';
      video.src = window.URL.createObjectURL(videoFile);
      video.load();
    });
  }
}
