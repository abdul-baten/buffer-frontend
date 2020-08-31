import { Component } from '@angular/core';
import { I_DROPDOWN } from '@core/model';

@Component({
  selector: 'buffer--facebook-date-selection',
  styleUrls: ['./facebook-date-selection.component.scss'],
  templateUrl: './facebook-date-selection.component.html',
})
export class FacebookDateSelectionComponent {
  countries: I_DROPDOWN[] = [{ label: 'Bangladesh', value: '' }];
}
