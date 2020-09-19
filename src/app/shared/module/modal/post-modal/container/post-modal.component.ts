import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PostModalFacade } from '../facade/post-modal.facade';

@Component({
  selector: 'buffer--post-modal',
  styleUrls: ['./post-modal.component.scss'],
  templateUrl: './post-modal.component.html',
})
export class PostModalComponent {
  constructor(public postInfo: DynamicDialogConfig, private facade: PostModalFacade) {
    this.facade.setNewPostData(postInfo.data.postData);
  }
}
