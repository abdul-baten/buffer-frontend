import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';

@Component({
  selector: 'buffer--account-header',
  styleUrls: ['./account-header.component.scss'],
  templateUrl: './account-header.component.html',
})
export class AccountHeaderComponent implements OnChanges {
  ACCOUNT_PROFILE_ROUTE = `/${PAGES.ACCOUNT_MODULE.PAGE_ROUTE}/${PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.PAGE_ROUTE}`;
  ACCOUNT_INVOICE_ROUTE = `/${PAGES.ACCOUNT_MODULE.PAGE_ROUTE}/${PAGES.ACCOUNT_MODULE.ROUTES.INVOICE_MODULE.PAGE_ROUTE}`;
  ACCOUNT_BILLING_ROUTE = `/${PAGES.ACCOUNT_MODULE.PAGE_ROUTE}/${PAGES.ACCOUNT_MODULE.ROUTES.BILLING_MODULE.PAGE_ROUTE}`;
  ACCOUNT_PLAN_ROUTE = `/${PAGES.ACCOUNT_MODULE.PAGE_ROUTE}/${PAGES.ACCOUNT_MODULE.ROUTES.PLAN_MODULE.PAGE_ROUTE}`;

  @Input() accountHeader: string;

  ngOnChanges(changes: SimpleChanges) {
    this.accountHeader = changes.accountHeader.currentValue;
  }
}
