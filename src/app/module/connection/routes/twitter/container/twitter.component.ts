import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { I_CONNECTION } from '@core/model';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { TwitterFacade } from '../facade/twitter.facade';

@Component({
  selector: 'buffer--twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss'],
})
export class TwitterComponent implements OnInit, OnDestroy {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, public facade: TwitterFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
  }

  ngOnInit(): void {
    this.getFacebookPages();
  }

  private getFacebookPages(): void {
    this.facade.fetchTwitterProfile(this.activatedRoute.queryParams);
  }

  addTwitterProfile(connection: I_CONNECTION): void {
    this.subscriptions$.add(this.facade.addTwitterProfile(connection).subscribe(() => this.facade.navigateToPage('connection/profiles')));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
