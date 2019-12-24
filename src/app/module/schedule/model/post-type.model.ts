// Third Party Modules
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Services
import { PostTypeImageService } from '../service/post-type-image.service';
import { PostTypeVideoService } from '../service/post-type-video.service';

export interface PostTypeGenerateInterface {
  generateConfig(): DropzoneConfigInterface;
}

export const postTypeMap = new Map([
  ['text', null],
  ['image', PostTypeImageService],
  ['video', PostTypeVideoService]
]);
