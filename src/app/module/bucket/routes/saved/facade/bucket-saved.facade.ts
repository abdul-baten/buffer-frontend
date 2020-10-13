import { Injectable } from '@angular/core';
import type { IPost } from 'src/app/core/model';
import type { ModalService } from 'src/app/core/service';

@Injectable()
export class BucketSavedFacade {
  constructor (private readonly modalService: ModalService) {}

  public editPost (post_info: IPost): void {
    this.modalService.openPostModal(post_info);
  }
}
