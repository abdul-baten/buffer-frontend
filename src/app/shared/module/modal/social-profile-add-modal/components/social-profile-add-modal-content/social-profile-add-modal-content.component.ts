import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';

@Component({
  selector: 'buffer--social-profile-add-modal-content',
  templateUrl: './social-profile-add-modal-content.component.html',
  styleUrls: ['./social-profile-add-modal-content.component.scss'],
})
export class SocialProfileAddModalContentComponent {
  isWeb$: Observable<boolean>;
  constructor(
    private layoutService: ResponsiveLayoutService,
    private dialogRef: MatDialogRef<SocialProfileAddModalContentComponent>,
  ) {
    this.isWeb$ = this.layoutService.isWeb();
  }

  handleSocialProfileAddModalCloseBtnClick(): void {
    this.dialogRef.close();
  }
}
