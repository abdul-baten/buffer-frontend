import { Component } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--dashboard-header-account',
  templateUrl: './dashboard-header-account.component.html',
  styleUrls: ['./dashboard-header-account.component.scss'],
})
export class DashboardHeaderAccountComponent {
  constructor(private router: Router) {}

  handleAccountNavigationClick(): void {
    this.router.navigateByUrl(PAGES.ACCOUNT_PAGE.PAGE_ROUTE);
  }
}
