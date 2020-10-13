import { PostTypeImageService } from '../service/post-type-image.service';
import { PostTypeVideoService } from '../service/post-type-video.service';

export interface IPostTypeGenerator {
  generateConfig(): Record<string, any>;
}

export const PostTypeMap = new Map([
  ['image', PostTypeImageService],
  ['text', null],
  ['video', PostTypeVideoService]
]);
