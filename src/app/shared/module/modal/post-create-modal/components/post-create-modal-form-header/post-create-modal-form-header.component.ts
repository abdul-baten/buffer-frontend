import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-create-modal-form-header',
  styleUrls: ['./post-create-modal-form-header.component.scss'],
  templateUrl: './post-create-modal-form-header.component.html',
})
export class PostCreateModalFormHeaderComponent {
  @Input() formHeader = '';

  constructor(private dialogRef: MatDialogRef<PostCreateModalFormHeaderComponent>) {}

  handlePostCreateModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
