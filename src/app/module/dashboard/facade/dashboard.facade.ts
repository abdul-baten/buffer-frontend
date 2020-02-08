import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostCreateModalComponent } from '@shared/module/modal/post-create-modal/container/post-create-modal.component';

@Injectable()
export class DashboardFacade {
  constructor(private documentTitleService: DocumentTitleService, private matDialog: MatDialog) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }

  handlePostCreateDialogOpen(postDate: Date): void {
    this.matDialog.open(PostCreateModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: postDate,
      width: '700px',
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
