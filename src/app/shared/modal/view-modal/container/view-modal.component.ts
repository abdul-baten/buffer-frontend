import { Component } from '@angular/core';
import type { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EPostType } from 'src/app/core/enum';
import type { IPost } from 'src/app/core/model';

@Component({
  selector: 'buffer-view-modal',
  styleUrls: ['./view-modal.component.css'],
  templateUrl: './view-modal.component.html'
})
export class ViewModalComponent {
  public post_info: IPost;
  public post_type = EPostType;

  constructor (public postInfo: DynamicDialogConfig) {
    this.post_info = this.postInfo.data.post_info;
  }

  public trackBy (index: number): number {
    return index;
  }
}
