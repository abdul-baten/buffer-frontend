import { DialogService } from 'primeng/dynamicdialog';
import { Injectable } from '@angular/core';
import { PostCreateModalComponent } from '@shared/module/modal/post-create-modal/container/post-create-modal.component';

@Injectable()
export class SocialProfileAddFacade {
  constructor(private dialogService: DialogService) {}

  handleAddPostBtnClick(postScheduledDateTime: Date, activeConnectionID: string): void {
    this.dialogService.open(PostCreateModalComponent, {
      header: 'Create Post',
      width: '550px',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      data: {
        postScheduledDateTime,
        activeConnectionID,
      },
    });
  }
}
