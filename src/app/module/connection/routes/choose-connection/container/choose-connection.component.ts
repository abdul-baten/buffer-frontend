import { ChooseConnectionFacade } from '../facade/choose-connection.facade';
import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { PAGES } from '@core/constant/page/page.constant';

export interface Section {
  name: string;
  updated: Date;
}

const API_URL = environment.apiURL;

@Component({
  selector: 'buffer--choose-connection',
  styleUrls: ['./choose-connection.component.scss'],
  templateUrl: './choose-connection.component.html',
})
export class ChooseConnectionComponent {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  folders: Section[] = [
    {
      name: 'Trial',
      updated: new Date('1/1/16'),
    },
  ];

  constructor(private readonly facade: ChooseConnectionFacade) {}

  navigateToPage(): void {
    const pageToNavigate = PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_ROUTE;
    this.facade.navigateToPage(pageToNavigate);
  }

  chooseNewConnection(): void {
    window.location.replace(API_URL + 'connection/oauth/facebook');
  }
}
