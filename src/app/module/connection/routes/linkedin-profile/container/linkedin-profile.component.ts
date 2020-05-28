import { Component } from '@angular/core';

@Component({
  selector: 'buffer--connection-linkedin-profile',
  templateUrl: './linkedin-profile.component.html',
  styleUrls: ['./linkedin-profile.component.scss'],
})
export class LinkedInProfileComponent {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';
}
