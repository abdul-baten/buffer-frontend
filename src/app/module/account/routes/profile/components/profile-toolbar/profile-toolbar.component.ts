import { Component } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';

@Component({
  selector: 'buffer--profile-toolbar',
  styleUrls: ['./profile-toolbar.component.scss'],
  templateUrl: './profile-toolbar.component.html',
})
export class ProfileToolbarComponent {
  EDIT_PROFILE_ROUTE = PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_PROFILE_PAGE.PAGE_ROUTE;
  EDIT_EMAIL_ROUTE = PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_EMAIL_PAGE.PAGE_ROUTE;
  EDIT_PASSWORD_ROUTE = PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_PASSWORD_PAGE.PAGE_ROUTE;
}
