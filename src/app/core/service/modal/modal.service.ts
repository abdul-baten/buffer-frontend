import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { I_POST } from '@core/model';
import { Injectable } from '@angular/core';
import { PostModalComponent } from '@shared/module/modal/post-modal/container/post-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private dialogRef: DynamicDialogRef;

  constructor(private dialogService: DialogService) {}

  openPostModal(header: string, postData: Partial<I_POST>): DynamicDialogRef {
    this.dialogRef = this.dialogService.open(PostModalComponent, {
      header,
      width: '550px',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      data: {
        postData,
      },
    });

    return this.dialogRef;
  }
}
