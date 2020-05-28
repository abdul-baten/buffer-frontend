import { I_POST_FILE, I_POST_TYPE_GENERATOR } from '@core/model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostTypeImageService implements I_POST_TYPE_GENERATOR {
  generateConfig(): Record<string, any> {
    const config = {
      acceptedFileTypes: ['image/png', 'image/jpeg'],
      allowFileEncode: true,
      allowFileTypeValidation: true,
      allowImageExifOrientation: true,
      allowImagePreview: true,
      allowMultiple: true,
      dropOnPage: true,
      dropValidation: true,
      fileValidateTypeLabelExpectedTypes: 'Expects {allButLastType}',
      imagePreviewHeight: 100,
      itemInsertLocation: 'after',
      labelFileTypeNotAllowed: 'Invalid file type.',
      labelIdle:
        '<p class="buffer--font-family-sans-medium buffer--font-size-sm">Drag & drop or <span class="filepond--label-action">Browse</span> upto 4 images</p>',
      labelFileProcessingComplete: 'Uploaded',
      labelFileProcessingAborted: 'Cancelled',
      labelTapToCancel: 'Click to Cancel upload.',
      labelTapToRetry: 'Click to Retry.',
      labelTapToUndo: 'Click to Undo.',
      maxFiles: 4,
      name: 'postMedia',
      stylePanelLayout: 'compact',
      server: {
        url: 'https://localhost:3000/api/v1.0.0/post',

        process: {
          url: `/add`,
          method: 'POST',
          withCredentials: true,
          onload: (fileInfo: I_POST_FILE) => {
            console.warn(JSON.parse(JSON.stringify(fileInfo)));
          },
        },
      },
    };

    return config;
  }
}
