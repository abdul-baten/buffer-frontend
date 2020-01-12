// Third Party Modules
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Services
import { PostTypeImageService } from '@app/schedule/service/post-type-image.service';
import { PostTypeVideoService } from '@app/schedule/service/post-type-video.service';

interface PostTypeGenerateInterface {
  generateConfig(): DropzoneConfigInterface;
}

const postTypeMap = new Map([
  ['text', null],
  ['image', PostTypeImageService],
  ['video', PostTypeVideoService],
]);

export { postTypeMap, PostTypeGenerateInterface };
