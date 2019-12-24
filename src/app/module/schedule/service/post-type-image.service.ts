// Core Modules
import { Injectable } from '@angular/core';

// Third Party Modules
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Models
import { PostTypeGenerateInterface } from '../model/post-type.model';

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
      dictDefaultMessage:
        '<i class="material-icons">add_to_photos</i><span class="buffer--font-size-sm buffer--margin-top-2">Drag or click here to upload upto 5 images</span>'
    };

    return config;
  }
}
