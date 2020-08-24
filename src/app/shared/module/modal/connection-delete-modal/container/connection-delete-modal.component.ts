import { Component, Inject } from '@angular/core';
import { I_CONNECTION } from '@core/model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--connection-delete-modal',
  templateUrl: './connection-delete-modal.component.html',
  styleUrls: ['./connection-delete-modal.component.scss'],
})
export class ConnectionDeleteModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public connection: I_CONNECTION, private readonly dialogRef: MatDialogRef<ConnectionDeleteModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  onDeletePostModalClosed(): void {}
}
