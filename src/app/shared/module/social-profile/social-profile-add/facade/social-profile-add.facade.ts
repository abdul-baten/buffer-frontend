import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostCreateModalComponent } from '@shared/module/modal/post-create-modal/container/post-create-modal.component';

@Injectable()
export class SocialProfileAddFacade {
  constructor(private matDialog: MatDialog) {}

  handleAddPostBtnClick(postScheduledDateTime: Date, activeConnectionID: string): void {
    this.matDialog.open(PostCreateModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: {
        postScheduledDateTime,
        activeConnectionID,
      },
      width: '600px',
      minHeight: '350px',
      role: 'dialog',
      autoFocus: true,
      direction: 'ltr',
      hasBackdrop: true,
      disableClose: true,
      restoreFocus: false,
      closeOnNavigation: true,
      panelClass: 'buffer--dialog-bottom-sheet-custom-panel',
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop',
    });
  }
}
