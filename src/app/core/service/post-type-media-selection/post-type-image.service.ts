import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Injectable } from '@angular/core';
import { PostTypeGenerateInterface } from '@app/schedule/model/post-type.model';

@Injectable()
export class PostTypeImageService implements PostTypeGenerateInterface {
  generateConfig(): DropzoneConfigInterface {
    const config = {
      maxFiles: 5,
      autoQueue: true,
      clickable: true,
      maxFilesize: 100,
      parallelUploads: 1,
      addRemoveLinks: false,
      uploadMultiple: false,
      autoProcessQueue: true,
      createImageThumbnails: true,
      url: 'https://httpbin.org/post',
      acceptedFiles: 'image/jpg,image/png,image/jpeg',
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
      <span class="buffer--font-family-semi-bold buffer--font-size-sm buffer--margin-top-2">Drag or click here to upload upto 5 images</span>`,
    };

    return config;
  }
}
