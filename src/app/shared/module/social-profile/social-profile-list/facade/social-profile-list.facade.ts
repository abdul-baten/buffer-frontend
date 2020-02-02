import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialProfileListModalComponent } from '@shared/module/modal/social-profile-list-modal/container/social-profile-list-modal.component';

@Injectable()
export class SocialProfileListFacade {
  constructor(private matDialog: MatDialog) {}

  handleSocialProfilesDialogOpen(): void {
    this.matDialog.open(SocialProfileListModalComponent, {
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
      data: '',
      width: '700px',
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
