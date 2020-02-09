import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-edit-modal-form-header',
  templateUrl: './post-edit-modal-form-header.component.html',
  styleUrls: ['./post-edit-modal-form-header.component.scss'],
})
export class PostEditModalFormHeaderComponent {
  @Input() formHeader = '';
  @Input() formHeaderIcon = '';

  constructor(private dialogRef: MatDialogRef<PostEditModalFormHeaderComponent>) {}

  handlePostEditModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
