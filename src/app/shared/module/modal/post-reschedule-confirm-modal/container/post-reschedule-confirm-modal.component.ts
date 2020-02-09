import { CalPostInterface } from '@core/model/post/post.model';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-reschedule-confirm-modal',
  templateUrl: './post-reschedule-confirm-modal.component.html',
  styleUrls: ['./post-reschedule-confirm-modal.component.scss'],
})
export class PostRescheduleConfirmModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public postInfo: CalPostInterface,
    private dialogRef: MatDialogRef<PostRescheduleConfirmModalComponent>,
  ) {}

  handleRescheduleCancelBtnClick(): void {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(_ => this.postInfo.revert());
  }

  handleRescheduleBtnClick(): void {
    this.dialogRef.close();
  }
}
