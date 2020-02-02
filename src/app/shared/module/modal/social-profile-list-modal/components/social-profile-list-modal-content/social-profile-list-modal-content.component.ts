import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--social-profile-list-modal-content',
  templateUrl: './social-profile-list-modal-content.component.html',
  styleUrls: ['./social-profile-list-modal-content.component.scss'],
})
export class SocialProfileListModalContentComponent {
  constructor(private dialogRef: MatDialogRef<SocialProfileListModalContentComponent>) {}

  handleSocialProfileListModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
