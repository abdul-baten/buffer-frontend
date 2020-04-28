import { Component } from '@angular/core';
import { HeaderAccountFacade } from '../facade/header-account.facade';
import { PAGES } from '@core/constant/page/page.constant';

@Component({
  selector: 'buffer--header-account',
  styleUrls: ['./header-account.component.scss'],
  templateUrl: './header-account.component.html',
})
export class HeaderAccountComponent {
  constructor(private headerAccountFacade: HeaderAccountFacade) {}

  handleAccountNavigationClick(): void {
    const pageTiNavigate = `${PAGES.ACCOUNT_MODULE.PAGE_ROUTE}/${PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.PAGE_ROUTE}`;
    this.headerAccountFacade.navigateToRoute(pageTiNavigate);
  }

  logoutUser(): void {
    this.headerAccountFacade.logoutUser();
  }
}
