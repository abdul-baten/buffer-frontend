import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { PostTypeImageService } from '@core/service/post-type-media-selection/post-type-image.service';
import { PostTypeVideoService } from '@core/service/post-type-media-selection/post-type-video.service';

interface PostTypeGenerateInterface {
  generateConfig(): DropzoneConfigInterface;
}

const postTypeMap = new Map([
  ['text', null],
  ['image', PostTypeImageService],
  ['video', PostTypeVideoService],
]);

export { postTypeMap, PostTypeGenerateInterface };
