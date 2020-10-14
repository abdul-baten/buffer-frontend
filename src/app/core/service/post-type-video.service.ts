/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

import { IMedia, IPostTypeGenerator } from '../model';
import { MediaService } from './media.service';
import { NotificationService } from './notification.service';

@Injectable()
export class PostTypeVideoService implements IPostTypeGenerator {
  constructor (public readonly mediaService: MediaService, public readonly notificationService: NotificationService) {}
  generateConfig (): Record<string, unknown> {
    const config = {
      acceptedFileTypes: ['video/mp4'],
      allowFileEncode: true,
      allowFileSizeValidation: true,
      allowImageExifOrientation: true,
      allowImagePreview: true,
      allowMultiple: false,
      allowmediaTypeValidation: true,
      dropOnPage: true,
      dropValidation: true,
      fileValidateTypeLabelExpectedTypes: 'Expects {allButLastType}',
      imagePreviewHeight: 100,
      imagePreviewMaxHeight: 100,
      itemInsertLocation: 'after',
      labelFileProcessingAborted: 'Cancelled',
      labelFileProcessingComplete: 'Uploaded',
      labelIdle: '<p><span class="filepond--label-action">Upload a video</span> or drag and drop here</p>',
      labelMaxFileSize: 'Maximum upload file size is {filesize}',
      labelMaxFileSizeExceeded: 'Media is too large.',
      labelTapToCancel: 'Click to Cancel upload.',
      labelTapToRetry: 'Click to Retry.',
      labelTapToUndo: 'Click to Undo.',
      labelmediaTypeNotAllowed: 'Invalid file type.',
      maxFileSize: '150MB',
      maxFiles: 1,
      mediaPreviewHeight: 100,
      name: 'postMedia',
      server: {
        load: (uniqueFileId: string, load: () => void, error: (reason: unknown) => PromiseLike<never>) => {
          fetch(uniqueFileId).
            then((res) => res.blob()).
            then(load).
            catch(error);
        },
        process: {
          method: 'POST',
          onerror: (error: Record<string, string>) => {
            this.notificationService.showError(error.errorMsg);
          },
          onload: (fileInfo: IMedia) => {
            const media = JSON.parse((fileInfo as unknown) as string) as IMedia;

            return media.id;
          },
          url: '/add',
          withCredentials: true
        },
        remove: (_media: string, load: () => void, error: (message: string) => void) => {
          error('Something went wrong.');
          load();
        },
        revert: (uniqueFileId: string) => {
          this.mediaService.deleteMedia(uniqueFileId).subscribe();
        },
        url: 'https://localhost:3000/api/v1.0.0/media'
      },
      stylePanelLayout: 'compact'
    };

    return config;
  }
}
