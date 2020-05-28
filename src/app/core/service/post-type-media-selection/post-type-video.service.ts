import { I_POST_TYPE_GENERATOR } from '@core/model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostTypeVideoService implements I_POST_TYPE_GENERATOR {
  generateConfig(): Record<string, any> {
    const config = {
      acceptedFileTypes: ['video/mp4'],
      allowFileEncode: true,
      allowFileTypeValidation: true,
      allowImageExifOrientation: true,
      allowImagePreview: true,
      allowMultiple: false,
      dropOnPage: true,
      dropValidation: true,
      fileValidateTypeLabelExpectedTypes: 'Expects {allButLastType}',
      imagePreviewHeight: 100,
      imagePreviewMaxHeight: 100,
      mediaPreviewHeight: 100,
      labelFileTypeNotAllowed: 'Invalid file type.',
      itemInsertLocation: 'after',
      labelIdle:
        '<p class="buffer--font-family-sans-medium buffer--font-size-sm">Drag & drop or <span class="filepond--label-action">Browse</span> video.</p>',
      labelFileProcessingComplete: 'Uploaded',
      labelFileProcessingAborted: 'Cancelled',
      labelTapToCancel: 'Click to Cancel upload.',
      labelTapToRetry: 'Click to Retry.',
      labelTapToUndo: 'Click to Undo.',
      maxFiles: 1,
      name: 'postMedia',
      stylePanelLayout: 'compact',
      server: {
        url: 'https://localhost:3000/api/v1.0.0/post',

        process: {
          url: '/add',
          method: 'POST',
          withCredentials: true,
        },
      },
    };

    return config;
  }
}
