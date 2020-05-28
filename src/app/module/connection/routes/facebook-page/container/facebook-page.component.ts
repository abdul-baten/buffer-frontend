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
    this.getFacebookPages();
    this.facade.setLoadingStatus(true);
  }

  private getFacebookPages(): void {
    this.facade.fetchFBPages(this.activatedRoute.queryParams);
  }

  addFacebookPage(pageInfo: I_CONNECTION): void {
    this.subscriptions$.add(
      this.facade.addFacebookPage(pageInfo).subscribe(() => this.facade.navigateToPage('connection/profiles')),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
