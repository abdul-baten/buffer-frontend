import { Injectable } from '@angular/core';
import { IPost } from 'src/app/core/model';
import { ModalService } from 'src/app/core/service';

@Injectable()
export class BucketSavedFacade {
  constructor (private readonly modalService: ModalService) {}

  public editPost (post_info: IPost): void {
    this.modalService.openPostModal(post_info);
  }
}
