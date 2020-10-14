import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostModalFacade } from '../facade/post-modal.facade';

@Component({
  selector: 'buffer-post-modal',
  styleUrls: ['./post-modal.component.css'],
  templateUrl: './post-modal.component.html'
})
export class PostModalComponent {
  active_index = 0;

  constructor (public postInfo: DynamicDialogConfig, private readonly facade: PostModalFacade, public dialogRef: DynamicDialogRef) {
    this.facade.setNewPostInfo(postInfo.data.postData);
  }

  openTab (index: number): void {
    this.active_index = index;
  }

  isDisabled (index: number): boolean {
    return this.active_index !== index;
  }
}
