import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PostModalFacade } from '../facade/post-modal.facade';

@Component({
  selector: 'buffer--post-modal',
  styleUrls: ['./post-modal.component.scss'],
  templateUrl: './post-modal.component.html',
})
export class PostModalComponent {
  constructor(public postInfo: DynamicDialogConfig, private postCreateModalFacade: PostModalFacade) {
    this.postCreateModalFacade.setNewPostData(postInfo.data.postData);
    // this.postCreateModalFacade.setNewPostActiveConnectionID(this.newPostData.activeConnectionID);
  }
}
