import { AppState } from 'src/app/reducers';
import { I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { ModalService } from '@core/service/modal/modal.service';
import { removeNewPostData, setPostType } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class BucketSavedFacade {
  constructor(private readonly modalService: ModalService, private store: Store<AppState>) {}

  editPost(post: I_POST): void {
    this.store.dispatch(setPostType({ postType: post.postType }));
    const dialogRef = this.modalService.openPostModal('Edit Post', post);

    dialogRef.onDestroy.subscribe(() => {
      this.store.dispatch(removeNewPostData());
    });
  }
}
