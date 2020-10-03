import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { E_POST_TYPE } from 'src/app/core/enum';

@Component({
  selector: 'buffer--view-modal',
  styleUrls: ['./view-modal.component.css'],
  templateUrl: './view-modal.component.html',
})
export class ViewModalComponent {
  postType = E_POST_TYPE;
  postData: any;

  constructor(public postInfo: DynamicDialogConfig) {
    this.postData = this.postInfo.data.postData;
  }

  trackBy(index: number, _media: string): number {
    return index;
  }
}
