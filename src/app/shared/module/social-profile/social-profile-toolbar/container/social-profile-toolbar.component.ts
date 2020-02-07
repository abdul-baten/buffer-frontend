import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialProfileToolbarFacade } from '../facade/social-profile-toolbar.facade';

@Component({
  selector: 'buffer--social-profile-toolbar',
  templateUrl: './social-profile-toolbar.component.html',
  styleUrls: ['./social-profile-toolbar.component.scss'],
})
export class SocialProfileToolbarComponent {
  isWeb: Observable<boolean>;

  constructor(private socialProfileToolbarFacade: SocialProfileToolbarFacade) {
    this.isWeb = this.socialProfileToolbarFacade.isWeb();
  }
}
