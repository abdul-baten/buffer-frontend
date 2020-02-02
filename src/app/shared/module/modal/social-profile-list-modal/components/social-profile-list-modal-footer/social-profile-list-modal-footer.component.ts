import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SocialProfileListModalFacade } from '../../facade/social-profile-list-modal.facade';

@Component({
  selector: 'buffer--social-profile-list-modal-footer',
  templateUrl: './social-profile-list-modal-footer.component.html',
  styleUrls: ['./social-profile-list-modal-footer.component.scss'],
})
export class SocialProfileListModalFooterComponent {
  constructor(
    private socialProfileListModalFacade: SocialProfileListModalFacade,
    private dialogRef: MatDialogRef<SocialProfileListModalFooterComponent>,
  ) {}

  handleSocialProfileListModalCloseBtnClick(): void {
    this.dialogRef.close();
  }

  handleAddSocialProfileBtnClick(): void {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => this.socialProfileListModalFacade.handleDialogOpen());
  }
}
