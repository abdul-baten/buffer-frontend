import { AppState } from 'src/app/reducers';
import { I_MEDIA, I_POST_TYPE_GENERATOR } from '../model';
import { Injectable } from '@angular/core';
import { MediaService } from './media.service';
import { NotificationService } from './notification.service';
import { removeNewPostMedia, setNewPostMedia } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class PostTypeImageService implements I_POST_TYPE_GENERATOR {
  constructor(public readonly mediaService: MediaService, public readonly notificationService: NotificationService, public store: Store<AppState>) {}
  generateConfig(): Record<string, any> {
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
      stylePanelLayout: 'compact',
      server: {
        url: 'https://localhost:3000/api/v1.0.0/media',

        process: {
          url: '/add',
          method: 'POST',
          withCredentials: true,
          onload: (fileInfo: I_MEDIA) => {
            const media = JSON.parse((fileInfo as unknown) as string) as I_MEDIA;
            this.store.dispatch(setNewPostMedia({ media: media.mediaURL }));
            return media.id;
          },
          onerror: (error: any) => {
            this.notificationService.showError(error.errorMsg);
          },
        },

        load: (uniqueFileId: string, load: any, error: any) => {
          console.warn(uniqueFileId);

          fetch(uniqueFileId)
            .then((res) => res.blob())
            .then(load)
            .catch(error);
        },

        revert: (uniqueFileId: string) => {
          this.mediaService.deleteMedia(uniqueFileId).subscribe((media: I_MEDIA) => {
            this.store.dispatch(removeNewPostMedia({ media: media.mediaURL }));
          });
        },

        remove: (media: string, load: any, error: any) => {
          this.store.dispatch(removeNewPostMedia({ media }));
          error('Something went wrong.');
          load();
        },
      },
    };

    return config;
  }
}
