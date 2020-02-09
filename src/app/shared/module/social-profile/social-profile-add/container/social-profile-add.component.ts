import { Component } from '@angular/core';
import { SocialProfileAddFacade } from '../facade/social-profile-add.facade';

@Component({
  selector: 'buffer--social-profile-add',
  styleUrls: ['./social-profile-add.component.scss'],
  templateUrl: './social-profile-add.component.html',
})
export class SocialProfileAddComponent {
  constructor(private socialProfileAddFacade: SocialProfileAddFacade) {}

  handleSocialProfileAddBtnClick(): void {
    this.socialProfileAddFacade.handleSocialProfileAddDialogOpen();
  }
}
