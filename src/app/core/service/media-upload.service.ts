import { ComposeService } from './compose.service';
import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { IError, IMedia, IUser } from '../model';
import { MediaService } from './media.service';
import { noop, Subscription } from 'rxjs';
import { NotificationService } from './notification.service';
import { UserService } from './user.service';

@Injectable()
export class MediaUploadService implements OnDestroy {
  private subscriptions$ = new Subscription();

  constructor (
    private readonly composeService: ComposeService,
    private readonly userService: UserService,
    private readonly mediaService: MediaService,
    private readonly notificationService: NotificationService
  ) { }

  generateConfig (): Record<string, unknown> {
    let media_user_id;

    this.subscriptions$.add(this.userService.getUserFromState().subscribe(({ id }: IUser) => {
      media_user_id = id;
    }));

    const config = {
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
      labelMaxFileSize: 'Maximum upload file size is {filesize}',
      labelMaxFileSizeExceeded: 'Media is too large.',
      labelTapToCancel: 'Click to Cancel upload.',
      labelTapToRetry: 'Click to Retry.',
      labelTapToUndo: 'Click to Undo.',
      labelmediaTypeNotAllowed: 'Invalid file type.',
      name: 'post_media',
      required: true,
      server: {
        load: (unique_id: string, load: () => void, error: (reason: unknown) => PromiseLike<never>) => {
          console.warn(unique_id);

          fetch(unique_id).
            then((res) => res.blob()).
            then(load).
            catch(error);
        },
        process: {
          method: 'POST',
          onerror: (error_info: string) => {
            const error = JSON.parse(error_info) as IError;

            this.notificationService.showError(error.message);
          },
          onload: (file_info: string) => {
            const { media_uri, media_user_id } = JSON.parse(file_info) as IMedia;

            this.subscriptions$.add(this.composeService.updatePostMedia(media_user_id, media_uri).subscribe(noop));
          },
          url: `/${media_user_id}`,
          withCredentials: true
        },
        remove: (media: string, load: () => void, error: (message: string) => void) => {
          error(`Something went wrong with ${media}`);
          load();
        },
        revert: (unique_id: string) => {
          this.mediaService.deleteMedia(unique_id);
        },
        url: 'https://localhost:3000/api/v1.0.0/media'
      },
      stylePanelLayout: 'compact'
    };

    return config;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe();
    }
  }
}
