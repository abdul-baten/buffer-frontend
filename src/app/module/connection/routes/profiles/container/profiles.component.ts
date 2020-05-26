import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { ProfilesFacade } from '../facade/profiles.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnDestroy, OnInit {
  chooseConnectionPage = `${PAGES.CONNECTION_MODULE.PAGE_ROUTE}/${PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_ROUTE}`;

  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  private subscriptions$ = new SubSink();

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly profilesFacade: ProfilesFacade) {}

  ngOnInit(): void {
    this.setDocumentTitle();
  }

  private setDocumentTitle(): void {
    this.subscriptions$.add(this.profilesFacade.setDocumentTitle(this.activatedRoute));
  }

  navigateToPage(pageToNavigate: string): void {
    this.profilesFacade.navigateToPage(pageToNavigate);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
