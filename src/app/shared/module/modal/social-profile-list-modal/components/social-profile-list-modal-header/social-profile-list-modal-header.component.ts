import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--social-profile-list-modal-header',
  templateUrl: './social-profile-list-modal-header.component.html',
  styleUrls: ['./social-profile-list-modal-header.component.scss'],
})
export class SocialProfileListModalHeaderComponent {
  constructor(private dialogRef: MatDialogRef<SocialProfileListModalHeaderComponent>) {}

  handleSocialProfileListModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
