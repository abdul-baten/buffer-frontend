import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialProfileAddModalComponent } from '@shared/module/modal/social-profile-add-modal/container/social-profile-add-modal.component';

@Injectable()
export class SocialProfileAddFacade {
  constructor(private matDialog: MatDialog) {}

  handleSocialProfileAddDialogOpen(): void {
    this.matDialog.open(SocialProfileAddModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: '',
      width: '950px',
      autoFocus: false,
      direction: 'ltr',
      hasBackdrop: true,
      role: 'alertdialog',
      disableClose: true,
      restoreFocus: false,
      closeOnNavigation: true,
      backdropClass: 'buffer--dialog-bottom-sheet-custom-backdrop',
    });
  }
}
