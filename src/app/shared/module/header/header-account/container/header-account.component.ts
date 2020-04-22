import { Component } from '@angular/core';
import { HeaderAccountFacade } from '../facade/header-account.facade';
import { PAGES } from '@core/constant/page/page.constant';

@Component({
  selector: 'buffer--header-account',
  templateUrl: './header-account.component.html',
  styleUrls: ['./header-account.component.scss'],
})
export class HeaderAccountComponent {
  customStyle = {
    fontFamily: 'Buffer SemiBold',
  };

  fullName = 'Abdul';

  constructor(private headerAccountFacade: HeaderAccountFacade) {}

  handleAccountNavigationClick(): void {
    this.headerAccountFacade.navigateToRoute(PAGES.ACCOUNT_PAGE.PAGE_ROUTE);
  }

  logoutUser(): void {
    this.headerAccountFacade.logoutUser();
  }
}
