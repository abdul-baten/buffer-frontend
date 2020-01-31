// Core Modules
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

// Third Party Modules

@Component({
  selector: 'buffer--post-details-modal-footer',
  templateUrl: './post-details-modal-footer.component.html',
  styleUrls: ['./post-details-modal-footer.component.scss'],
})
export class PostDetailsModalFooterComponent {
  constructor(private dialogRef: MatDialogRef<PostDetailsModalFooterComponent>) {}

  handleCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
