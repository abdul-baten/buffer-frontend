// Core Module
import { Component, Inject } from '@angular/core';

// Third Party Module
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-delete-modal',
  templateUrl: './post-delete-modal.component.html',
  styleUrls: ['./post-delete-modal.component.scss'],
})
export class PostDeleteModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<PostDeleteModalComponent>,
  ) {}

  handleCancelBtnClick(): void {
    this.dialogRef.close();
  }

  onDeletePostModalClosed(): void {
    this.dialogRef.close();
  }
}
