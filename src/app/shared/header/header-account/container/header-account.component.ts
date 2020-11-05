import { Component, OnInit } from '@angular/core';
import { RouteMeta } from 'src/app/core/constant';
import { HeaderAccountFacade } from '../facade/header-account.facade';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'buffer-header-account',
  styleUrls: ['./header-account.component.css'],
  templateUrl: './header-account.component.html'
})
export class HeaderAccountComponent implements OnInit {
  menu_items: MenuItem[] = [];

  constructor (private readonly facade: HeaderAccountFacade) {}

  ngOnInit (): void {
    this.menu_items = [
      {
        icon: 'ico-md ico-gear',
        label: 'Account settings',
        routerLink: ['/account/profile'],
        routerLinkActiveOptions: { exact: true }
      },
      {
        icon: 'ico-md ico-stylish-up',
        label: 'Plan & Pricing',
        routerLink: ['/account/plan'],
        routerLinkActiveOptions: { exact: true }
      },
      {
        icon: 'ico-md ico-list',
        label: 'Invoice',
        routerLink: ['/account/invoice'],
        routerLinkActiveOptions: { exact: true }
      },
      {
        icon: 'ico-md ico-dollar',
        label: 'Billing',
        routerLink: ['/account/billing'],
        routerLinkActiveOptions: { exact: true }
      },
      { separator: true },
      {
        command: () => {
          this.logoutUser();
        },
        icon: 'ico-md ico-sign-out',
        label: 'Sign out'
      }
    ];
  }

  handleAccountNavigationClick (): void {
    const page_to_navigate = `${RouteMeta.ACCOUNT_MODULE.ROUTE}/${RouteMeta.EDIT_PROFILE.ROUTE}`;

    this.facade.navigateToRoute(page_to_navigate);
  }

  logoutUser (): void {
    this.facade.logoutUser();
  }
}
