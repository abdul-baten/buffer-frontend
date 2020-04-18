import { Component } from '@angular/core';
import { DashboardHeaderFacade } from '@shared/module/header/dashboard-header/facade/dashboard-header.facade';
import { PAGES } from '@core/constant/page/page.constant';

@Component({
  selector: 'buffer--dashboard-header-account',
  templateUrl: './dashboard-header-account.component.html',
  styleUrls: ['./dashboard-header-account.component.scss'],
})
export class DashboardHeaderAccountComponent {
  constructor(private dashboardHeaderFacade: DashboardHeaderFacade) {}

  handleAccountNavigationClick(): void {
    this.dashboardHeaderFacade.navigateToRoute(PAGES.ACCOUNT_PAGE.PAGE_ROUTE);
  }

  logoutUser(): void {
    this.dashboardHeaderFacade.logoutUser();
  }
}
