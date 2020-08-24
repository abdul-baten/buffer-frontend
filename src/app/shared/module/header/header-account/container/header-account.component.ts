import { Component, OnInit } from '@angular/core';
import { HeaderAccountFacade } from '../facade/header-account.facade';
import { MenuItem } from 'primeng/api';
import { PAGES } from '@core/constant/page/page.constant';

@Component({
  selector: 'buffer--header-account',
  styleUrls: ['./header-account.component.scss'],
  templateUrl: './header-account.component.html',
})
export class HeaderAccountComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private headerAccountFacade: HeaderAccountFacade) {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Account',
        icon: 'pi pi-user',
        command: () => {
          this.handleAccountNavigationClick();
        },
      },
      {
        label: 'Sign out',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logoutUser();
        },
      },
      { separator: true },
      { label: 'Manage Profiles', icon: 'pi pi-users', routerLink: ['/setup'] },
    ];
  }

  handleAccountNavigationClick(): void {
    const pageTiNavigate = `${PAGES.ACCOUNT_MODULE.PAGE_ROUTE}/${PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.PAGE_ROUTE}`;
    this.headerAccountFacade.navigateToRoute(pageTiNavigate);
  }

  logoutUser(): void {
    this.headerAccountFacade.logoutUser();
  }
}
