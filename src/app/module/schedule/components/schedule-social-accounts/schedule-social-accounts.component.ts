import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-social-accounts',
  templateUrl: './schedule-social-accounts.component.html',
  styleUrls: ['./schedule-social-accounts.component.scss'],
})
export class ScheduleSocialAccountsComponent {
  isWeb: Observable<boolean>;

  constructor(private scheduleFacade: ScheduleFacade) {
    this.isWeb = this.scheduleFacade.isWeb();
  }
}
