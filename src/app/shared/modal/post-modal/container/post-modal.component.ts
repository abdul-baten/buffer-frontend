import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostModalFacade } from '../facade/post-modal.facade';

@Component({
  selector: 'buffer--post-modal',
  styleUrls: ['./post-modal.component.css'],
  templateUrl: './post-modal.component.html',
})
export class PostModalComponent {
  activeIndex: number = 0;

  constructor(public postInfo: DynamicDialogConfig, private readonly facade: PostModalFacade, public dialogRef: DynamicDialogRef) {
    this.facade.setNewPostData(postInfo.data.postData);
  }

  openTab(index: number): void {
    this.activeIndex = index;
  }

  isDisabled(index: number): boolean {
    return this.activeIndex !== index;
  }
}
