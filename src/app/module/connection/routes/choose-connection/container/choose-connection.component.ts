import { ChooseConnectionFacade } from '../facade/choose-connection.facade';
import { Component } from '@angular/core';
import { E_CONNECTION_TYPE } from '@core/enum';
import { environment } from '@env/environment';
import { PAGES } from '@core/constant/page/page.constant';

const API_URL = environment.apiURL;

@Component({
  selector: 'buffer--choose-connection',
  styleUrls: ['./choose-connection.component.scss'],
  templateUrl: './choose-connection.component.html',
})
export class ChooseConnectionComponent {
  connections: any[] = [
    {
      image: 'facebook',
      name: 'Facebook Page',
      type: E_CONNECTION_TYPE.FACEBOOK_PAGE,
    },
    {
      image: 'facebook',
      name: 'Facebook Group',
      type: E_CONNECTION_TYPE.FACEBOOK_GROUP,
    },
    {
      image: 'instagram',
      name: 'Instagram Business',
      type: E_CONNECTION_TYPE.INSTAGRAM_BUSINESS,
    },
    {
      image: 'instagram',
      name: 'Instagram Personal',
      type: E_CONNECTION_TYPE.INSTAGRAM_PERSONAL,
    },
    {
      image: 'twitter',
      name: 'Twitter',
      type: E_CONNECTION_TYPE.TWITTER,
    },
    {
      image: 'linkedin',
      name: 'Linkedin Page',
      type: E_CONNECTION_TYPE.LINKEDIN_PAGE,
    },
    {
      image: 'linkedin',
      name: 'Linkedin Profile',
      type: E_CONNECTION_TYPE.LINKEDIN_PROFILE,
    },
    {
      image: 'pinterest',
      name: 'Pinterest',
      type: E_CONNECTION_TYPE.PINTEREST,
    },
  ];

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
