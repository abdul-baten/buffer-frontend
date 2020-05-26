import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FacebookPageFacade } from '../facade/facebook-page.facade';
import { I_CONNECTION } from '@core/model';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--app-facebook-page',
  templateUrl: './facebook-page.component.html',
  styleUrls: ['./facebook-page.component.scss'],
})
export class FacebookPageComponent implements OnDestroy, OnInit {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, public facade: FacebookPageFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
  }

  ngOnInit(): void {
    this.setDocumentTitle();
    this.getFacebookPages();
    this.facade.setLoadingStatus(true);
  }

  private setDocumentTitle(): void {
    this.subscriptions$.add(this.facade.setDocumentTitle(this.activatedRoute));
  }

  private getFacebookPages(): void {
    this.facade.fetchFBPages(this.activatedRoute.queryParams);
  }

  addFacebookPage(pageInfo: I_CONNECTION): void {
    this.facade
      .addFacebookPage(pageInfo)
      .subscribe((connection: I_CONNECTION) => this.facade.navigateToPage(`/schedule/${connection._id}`, connection));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
