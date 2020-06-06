import { AppState } from 'src/app/reducers';
import { I_MEDIA, I_POST_TYPE_GENERATOR } from '@core/model';
import { Injectable } from '@angular/core';
import { MediaService } from '../media/media.service';
import { NotificationService } from '../notification/notification.service';
import { removeNewPostMedia, setNewPostMedia } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class PostTypeVideoService implements I_POST_TYPE_GENERATOR {
  constructor(public readonly mediaService: MediaService, public readonly notificationService: NotificationService, public store: Store<AppState>) {}
  generateConfig(): Record<string, any> {
    const config = {
      acceptedFileTypes: ['video/mp4'],
      allowFileEncode: true,
      allowmediaTypeValidation: true,
      allowImageExifOrientation: true,
      allowImagePreview: true,
      allowMultiple: false,
      dropOnPage: true,
      dropValidation: true,
      fileValidateTypeLabelExpectedTypes: 'Expects {allButLastType}',
      imagePreviewHeight: 100,
      imagePreviewMaxHeight: 100,
      mediaPreviewHeight: 100,
      labelmediaTypeNotAllowed: 'Invalid file type.',
      itemInsertLocation: 'after',
      labelIdle: '<p class="buffer--font-family-lars-regular">Drag & drop or <span class="filepond--label-action">Browse</span> a video.</p>',
      labelFileProcessingComplete: 'Uploaded',
      labelFileProcessingAborted: 'Cancelled',
      labelTapToCancel: 'Click to Cancel upload.',
      labelTapToRetry: 'Click to Retry.',
      labelTapToUndo: 'Click to Undo.',
      maxFiles: 1,
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
            this.store.dispatch(setNewPostMedia({ media: media.mediaURL }));
            return media.id;
          },
          onerror: (error: any) => {
            this.notificationService.openNotificationWithComponent(error.errorMsg);
          },
        },

        revert: (uniqueFileId: string) => {
          this.mediaService.deleteMedia(uniqueFileId).subscribe((media: I_MEDIA) => {
            this.store.dispatch(removeNewPostMedia({ media: media.mediaURL }));
          });
        },
      },
    };

    return config;
  }
}
