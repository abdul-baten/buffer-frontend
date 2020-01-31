import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalPostInterface } from '@app/schedule/model/schedule.model';

@Component({
  selector: 'buffer--post-edit-modal',
  templateUrl: './post-edit-modal.component.html',
  styleUrls: ['./post-edit-modal.component.scss'],
})
export class PostEditModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public postInfo: CalPostInterface) {
    console.warn(this.postInfo);
  }
}
