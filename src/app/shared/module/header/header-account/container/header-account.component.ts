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
        label: 'Profile settings',
        icon: 'pi pi-cog',
        routerLink: ['/account/profile'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Upgrade',
        icon: 'pi pi-sort-amount-up',
        routerLink: ['/account/plan'],
        routerLinkActiveOptions: { exact: true },
      },
      { separator: true },
      {
        label: 'Sign out',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logoutUser();
        },
      },
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
