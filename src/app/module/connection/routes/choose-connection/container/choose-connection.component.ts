import { ActivatedRoute } from '@angular/router';
import { ChooseConnectionFacade } from '../facade/choose-connection.facade';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { SubSink } from 'subsink';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'buffer--choose-connection',
  styleUrls: ['./choose-connection.component.scss'],
  templateUrl: './choose-connection.component.html',
})
export class ChooseConnectionComponent implements OnDestroy, OnInit {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 80;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  folders: Section[] = [
    {
      name: 'Trial',
      updated: new Date('1/1/16'),
    },
  ];

  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private facade: ChooseConnectionFacade) {}

  ngOnInit(): void {
    this.setDocumentTitle();
  }

  private setDocumentTitle(): void {
    this.subscriptions$.add(this.facade.setDocumentTitle(this.activatedRoute));
  }

  navigateToPage(): void {
    const pageToNavigate = PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_ROUTE;
    this.facade.navigateToPage(pageToNavigate);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
