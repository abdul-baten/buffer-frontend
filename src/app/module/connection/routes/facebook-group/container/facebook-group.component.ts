import { Component } from '@angular/core';

@Component({
  selector: 'buffer--app-facebook-group',
  templateUrl: './facebook-group.component.html',
  styleUrls: ['./facebook-group.component.scss'],
})
export class FacebookGroupComponent {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';
}
