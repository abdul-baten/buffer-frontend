import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Injectable } from '@angular/core';
import { PostTypeGenerateInterface } from '@app/schedule/model/post-type.model';

@Injectable()
export class PostTypeVideoService implements PostTypeGenerateInterface {
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
      dictDefaultMessage:
        '<i class="material-icons">add_to_photos</i><span class="buffer--font-size-sm buffer--margin-top-2">Drag or click here to upload</span>',
    };

    return config;
  }
}
