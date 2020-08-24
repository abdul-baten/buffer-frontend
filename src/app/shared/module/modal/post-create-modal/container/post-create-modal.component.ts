import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PostCreateModalFacade } from '../facade/post-create-modal.facade';

@Component({
  selector: 'buffer--post-create-modal',
  templateUrl: './post-create-modal.component.html',
  styleUrls: ['./post-create-modal.component.scss'],
})
export class PostCreateModalComponent {
  constructor(public newPostData: DynamicDialogConfig, private postCreateModalFacade: PostCreateModalFacade) {
    this.postCreateModalFacade.setNewPostDate(newPostData.data.postScheduledDateTime);
    // this.postCreateModalFacade.setNewPostActiveConnectionID(this.newPostData.activeConnectionID);
  }
}
