import { SocialProfileListFacade } from '@shared/module/social-profile/social-profile-list/facade/social-profile-list.facade';
import { Component } from '@angular/core';

@Component({
  selector: 'buffer--social-profile-list',
  styleUrls: ['./social-profile-list.component.scss'],
  templateUrl: './social-profile-list.component.html',
})
export class SocialProfileListComponent {
  constructor(private socialProfileListFacade: SocialProfileListFacade) {}

  handleSocialProfilesBtnClick(): void {
    this.socialProfileListFacade.handleSocialProfilesDialogOpen();
  }
}
