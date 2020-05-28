import { Component } from '@angular/core';

@Component({
  selector: 'buffer--connection-linkedin-page',
  templateUrl: './linkedin-page.component.html',
  styleUrls: ['./linkedin-page.component.scss'],
})
export class LinkedInPageComponent {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';
}
