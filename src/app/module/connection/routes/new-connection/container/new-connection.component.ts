import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NewConnectionFacade } from '../facade/new-connection.facade';
import { PAGES } from '@core/constant/page/page.constant';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--new-connection',
  styleUrls: ['./new-connection.component.scss'],
  templateUrl: './new-connection.component.html',
})
export class NewConnectionComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private facade: NewConnectionFacade) {}

  ngOnInit() {
    this.setDocumentTitle();
  }

  private setDocumentTitle(): void {
    this.subscriptions$.add(this.facade.setDocumentTitle(this.activatedRoute));
  }

  navigateToPage(): void {
    const pageToNavigate = `${PAGES.CONNECTION_MODULE.PAGE_ROUTE}/${PAGES.CONNECTION_MODULE.ROUTES.CONNECTION_CHOOSE_PAGE.PAGE_ROUTE}`;
    this.facade.navigateToPage(pageToNavigate);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
