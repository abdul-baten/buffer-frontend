import { Injectable } from '@angular/core';
import { remove_post_media, set_post_media } from 'src/app/actions';
/* eslint-disable @typescript-eslint/naming-convention */
import type { IAppState } from 'src/app/reducers';
import type { IMedia, IPostTypeGenerator } from '../model';
import type { MediaService } from './media.service';
import type { NotificationService } from './notification.service';
import type { Store } from '@ngrx/store';

@Injectable()
export class PostTypeImageService implements IPostTypeGenerator {
  constructor (public readonly mediaService: MediaService, public readonly notificationService: NotificationService, public store: Store<IAppState>) {}
  generateConfig (): Record<string, any> {
    const config = {
      acceptedFileTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/bmp', 'image/tiff'],
      allowFileEncode: true,
      allowFileSizeValidation: true,
      allowImageExifOrientation: true,
      allowImagePreview: true,
      allowMultiple: true,
      allowRevert: true,
      allowmediaTypeValidation: true,
      dropOnPage: true,
      dropValidation: true,
      fileValidateTypeLabelExpectedTypes: 'Expects {allButLastType}',
      imagePreviewHeight: 100,
      itemInsertLocation: 'after',
      labelFileProcessingAborted: 'Cancelled',
      labelFileProcessingComplete: 'Uploaded',
      labelIdle: '<p><span class="filepond--label-action">Upload an image</span> or drag and drop here</p>',
      labelMaxFileSize: 'Maximum upload file size is {filesize}',
      labelMaxFileSizeExceeded: 'Media is too large.',
      labelTapToCancel: 'Click to Cancel upload.',
      labelTapToRetry: 'Click to Retry.',
      labelTapToUndo: 'Click to Undo.',
      labelmediaTypeNotAllowed: 'Invalid file type.',
      maxFileSize: '5MB',
      maxFiles: 4,
      name: 'postMedia',
      required: true,
      server: {
        load: (uniqueFileId: string, load: any, error: any) => {
          console.warn(uniqueFileId);

          fetch(uniqueFileId).
            then((res) => res.blob()).
            then(load).
            catch(error);
        },
        process: {
          method: 'POST',
          onerror: (error: any) => {
            this.notificationService.showError(error.errorMsg);
          },
          onload: (fileInfo: IMedia) => {
            const media = JSON.parse((fileInfo as unknown) as string) as IMedia;

            this.store.dispatch(set_post_media({ media: media.media_url as string }));

            return media.id;
          },
          url: '/add',
          withCredentials: true
        },
        remove: (media: string, load: any, error: any) => {
          this.store.dispatch(remove_post_media({ media }));
          error('Something went wrong.');
          load();
        },
        revert: (uniqueFileId: string) => {
          this.mediaService.deleteMedia(uniqueFileId).subscribe((media: IMedia) => {
            this.store.dispatch(remove_post_media({ media: media.media_url as string }));
          });
        },
        url: 'https://localhost:3000/api/v1.0.0/media'
      },
      stylePanelLayout: 'compact'
    };

    return config;
  }
}
