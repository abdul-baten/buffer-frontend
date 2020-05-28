import { Component, OnInit } from '@angular/core';
import { I_CONNECTION } from '@core/model';
import { Observable, of } from 'rxjs';
import { PAGES } from '@core/constant/page/page.constant';
import { ProfilesFacade } from '../facade/profiles.facade';

@Component({
  selector: 'buffer--profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  chooseConnectionPage = `${PAGES.CONNECTION_MODULE.PAGE_ROUTE}/${PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_ROUTE}`;

  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  connections$: Observable<I_CONNECTION[]> = of([]);

  constructor(private readonly profilesFacade: ProfilesFacade) {
    this.isTablet$ = this.profilesFacade.isTablet();
    this.isWeb$ = this.profilesFacade.isWeb();
  }

  ngOnInit(): void {
    this.getConnections();
  }

  private getConnections(): void {
    this.connections$ = this.profilesFacade.getConnectionsFromState();
  }

  trackByConnectionID(connection: I_CONNECTION): string {
    return connection._id;
  }

  deleteConnection(connection: I_CONNECTION): void {
    this.profilesFacade.deleteConnection(connection);
  }

  navigateToPage(pageToNavigate: string): void {
    this.profilesFacade.navigateToPage(pageToNavigate);
  }
}
