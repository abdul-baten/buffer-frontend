import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--social-profile-add-modal-header',
  templateUrl: './social-profile-add-modal-header.component.html',
  styleUrls: ['./social-profile-add-modal-header.component.scss'],
})
export class SocialProfileAddModalHeaderComponent {
  constructor(private dialogRef: MatDialogRef<SocialProfileAddModalHeaderComponent>) {}

  handleSocialProfileAddModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
