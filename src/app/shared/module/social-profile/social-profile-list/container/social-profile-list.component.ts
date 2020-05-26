import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--social-profile-list',
  styleUrls: ['./social-profile-list.component.scss'],
  templateUrl: './social-profile-list.component.html',
})
export class SocialProfileListComponent {
  constructor(private router: Router) {}

  handleSocialProfilesBtnClick(): void {
    this.router.navigate(['connection/profiles']);
  }
}
