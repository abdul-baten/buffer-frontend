import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostCreateModalFacade } from '../facade/post-create-modal.facade';

@Component({
  selector: 'buffer--post-create-modal',
  templateUrl: './post-create-modal.component.html',
  styleUrls: ['./post-create-modal.component.scss'],
})
export class PostCreateModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private postDate: string, private postCreateModalFacade: PostCreateModalFacade) {
    this.postCreateModalFacade.setNewPostDate(this.postDate);
  }
}
