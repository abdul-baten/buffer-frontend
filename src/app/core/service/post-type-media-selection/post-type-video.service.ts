import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { I_POST_TYPE_GENERATOR } from '@core/model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostTypeVideoService implements I_POST_TYPE_GENERATOR {
  generateConfig(): DropzoneConfigInterface {
    const config = {
      maxFiles: 1,
      autoQueue: true,
      clickable: true,
      maxFilesize: 100,
      parallelUploads: 1,
      addRemoveLinks: false,
      uploadMultiple: false,
      autoProcessQueue: true,
      createImageThumbnails: true,
      url: 'https://httpbin.org/post',
      acceptedFiles: 'video/mp4',
      dictDefaultMessage: `<i class="
      buffer--align-items-center
      buffer--background-color-white
      buffer--border-radius-full
      buffer--box-shadow
      buffer--display-flex
      buffer--flex-justify-content-center
      buffer--width-12 buffer--height-12
      material-icons
      ">add_to_photos</i>
      <span class="buffer--font-family-sans-medium buffer--font-size-sm buffer--margin-top-2">Drag or click here to upload video</span>`,
    };

    return config;
  }
}
