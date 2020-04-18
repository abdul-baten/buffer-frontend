import { Component } from '@angular/core';

@Component({
  selector: 'buffer--social-profile-add-modal-content-action',
  templateUrl: './social-profile-add-modal-content-action.component.html',
  styleUrls: ['./social-profile-add-modal-content-action.component.scss'],
})
export class SocialProfileAddModalContentActionComponent {
  naviagte(): void {
    location.replace('https://localhost:3000/api/v1.0.0/social-profile/oauth/facebook');
  }
}
