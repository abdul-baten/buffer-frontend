import { ChooseConnectionFacade } from '../facade/choose-connection.facade';
import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { PAGES } from '@core/constant/page/page.constant';
import { E_CONNECTION_TYPE } from '@core/enum';

const API_URL = environment.apiURL;

@Component({
  selector: 'buffer--choose-connection',
  styleUrls: ['./choose-connection.component.scss'],
  templateUrl: './choose-connection.component.html',
})
export class ChooseConnectionComponent {
  connectionType = E_CONNECTION_TYPE;
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  constructor(private readonly facade: ChooseConnectionFacade) {}

  navigateToPage(): void {
    const routeToNavigate = PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_ROUTE;
    this.facade.navigateToRoute(routeToNavigate);
  }

  chooseNewConnection(oauthType: E_CONNECTION_TYPE): void {
    const oAuthTypeArray = oauthType.toLowerCase().split('_');
    const connectionType = oAuthTypeArray.join('-');

    const authType = oAuthTypeArray[0];
    window.location.replace(API_URL + `${authType}/authorize?connectionType=${connectionType}`);
  }
}
