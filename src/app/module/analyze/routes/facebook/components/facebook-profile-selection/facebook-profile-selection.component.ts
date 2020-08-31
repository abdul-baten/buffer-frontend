import { Component } from '@angular/core';
import { I_DROPDOWN } from '@core/model';

@Component({
  selector: 'buffer--facebook-profile-selection',
  styleUrls: ['./facebook-profile-selection.component.scss'],
  templateUrl: './facebook-profile-selection.component.html',
})
export class FacebookProfileSelectionComponent {
  countries: I_DROPDOWN[] = [{ label: 'Test Page for Facebook Test Page for fb', value: '' }];
}
