import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FacebookGroupFacade } from '../facade/facebook-group.facade';
import { I_CONNECTION } from '@core/model';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--app-facebook-group',
  templateUrl: './facebook-group.component.html',
  styleUrls: ['./facebook-group.component.scss'],
})
export class FacebookGroupComponent implements OnDestroy, OnInit {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, public facade: FacebookGroupFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
  }

  ngOnInit(): void {
    this.getFacebookGroups();
    this.facade.setLoadingStatus(true);
  }

  private getFacebookGroups(): void {
    this.facade.fetchFBGroups(this.activatedRoute.queryParams, 'facebook-group');
  }

  addFacebookGroup(pageInfo: I_CONNECTION): void {
    this.subscriptions$.add(this.facade.addFacebookGroup(pageInfo).subscribe(() => this.facade.navigateToGroup('connection/profiles')));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
