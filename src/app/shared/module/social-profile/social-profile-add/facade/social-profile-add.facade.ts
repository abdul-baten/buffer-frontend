import { AppState } from 'src/app/reducers';
import { format } from 'date-fns';
import { Injectable } from '@angular/core';
import { ModalService } from '@core/service/modal/modal.service';
import { removeNewPostData } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class SocialProfileAddFacade {
  constructor(private readonly modalService: ModalService, private store: Store<AppState>) {}

  handleAddPostBtnClick(postScheduleDateTime: Date): void {
    const dialogRef = this.modalService.openPostModal('Create Post', {
      postScheduleDateTime: format(new Date(postScheduleDateTime), `yyyy-MM-dd'T'HH:mm:ssxxx`),
    });

    dialogRef.onDestroy.subscribe(() => {
      this.store.dispatch(removeNewPostData());
    });
  }
}
