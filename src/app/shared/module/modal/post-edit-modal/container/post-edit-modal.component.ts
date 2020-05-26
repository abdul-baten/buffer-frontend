import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { I_POST } from '@core/model';

@Component({
  selector: 'buffer--post-edit-modal',
  templateUrl: './post-edit-modal.component.html',
  styleUrls: ['./post-edit-modal.component.scss'],
})
export class PostEditModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public postInfo: I_POST) {
    console.warn(this.postInfo);
  }
}
