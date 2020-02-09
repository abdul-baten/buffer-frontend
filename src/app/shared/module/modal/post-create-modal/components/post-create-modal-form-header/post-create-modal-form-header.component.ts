import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-create-modal-form-header',
  templateUrl: './post-create-modal-form-header.component.html',
  styleUrls: ['./post-create-modal-form-header.component.scss'],
})
export class PostCreateModalFormHeaderComponent {
  @Input() formHeader = '';
  @Input() formHeaderIcon = '';

  constructor(private dialogRef: MatDialogRef<PostCreateModalFormHeaderComponent>) {}

  handlePostCreateModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
