import { PostTypeImageService } from '@core/service/post-type-media-selection/post-type-image.service';
import { PostTypeVideoService } from '@core/service/post-type-media-selection/post-type-video.service';

// tslint:disable-next-line
export interface I_POST_TYPE_GENERATOR {
  generateConfig(): Record<string, any>;
}

export const I_POST_TYPE_MAP = new Map([
  ['text', null],
  ['image', PostTypeImageService],
  ['video', PostTypeVideoService],
]);
