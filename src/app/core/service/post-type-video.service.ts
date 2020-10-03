import { AppState } from 'src/app/reducers';
import { I_MEDIA, I_POST_TYPE_GENERATOR } from '../model';
import { Injectable } from '@angular/core';
import { MediaService } from './media.service';
import { NotificationService } from './notification.service';
import { removeNewPostMedia, setNewPostMedia } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class PostTypeVideoService implements I_POST_TYPE_GENERATOR {
  constructor(public readonly mediaService: MediaService, public readonly notificationService: NotificationService, public store: Store<AppState>) {}
  generateConfig(): Record<string, any> {
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
      stylePanelLayout: 'compact',
      server: {
        url: 'https://localhost:3000/api/v1.0.0/media',

        process: {
          url: '/add',
          method: 'POST',
          withCredentials: true,
          onload: (fileInfo: I_MEDIA) => {
            const media = JSON.parse((fileInfo as unknown) as string) as I_MEDIA;
            this.store.dispatch(setNewPostMedia({ media: media.mediaURL as string }));
            return media.id;
          },
          onerror: (error: any) => {
            this.notificationService.showError(error.errorMsg);
          },
        },

        load: (uniqueFileId: string, load: any, error: any) => {
          fetch(uniqueFileId)
            .then((res) => res.blob())
            .then(load)
            .catch(error);
        },

        revert: (uniqueFileId: string) => {
          this.mediaService.deleteMedia(uniqueFileId).subscribe((media: I_MEDIA) => {
            this.store.dispatch(removeNewPostMedia({ media: media.mediaURL as string }));
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
