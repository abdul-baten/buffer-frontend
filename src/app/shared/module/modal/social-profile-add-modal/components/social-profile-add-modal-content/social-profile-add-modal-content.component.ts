import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--social-profile-add-modal-content',
  templateUrl: './social-profile-add-modal-content.component.html',
  styleUrls: ['./social-profile-add-modal-content.component.scss'],
})
export class SocialProfileAddModalContentComponent {
  constructor(private dialogRef: MatDialogRef<SocialProfileAddModalContentComponent>) {}

  handleSocialProfileAddModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
