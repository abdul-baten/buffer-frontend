import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileFacade } from '../facade/profile.facade';

@Component({
  selector: 'buffer--profile',
  styleUrls: ['./profile.component.css'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  isWeb$: Observable<boolean>;

  constructor(private readonly profileFacade: ProfileFacade) {
    this.isWeb$ = this.profileFacade.isWeb();
  }
}
