import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'buffer--social-profile-add-modal-footer',
  templateUrl: './social-profile-add-modal-footer.component.html',
  styleUrls: ['./social-profile-add-modal-footer.component.scss'],
})
export class SocialProfileAddModalFooterComponent {
  constructor(private dialogRef: MatDialogRef<SocialProfileAddModalFooterComponent>) {}

  handleSocialProfileAddModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
