import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { FacebookGroupFacade } from '../facade/facebook-group.facade';
import { I_CONNECTION } from '@core/model';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--facebook-group',
  styleUrls: ['./facebook-group.component.scss'],
  templateUrl: './facebook-group.component.html',
})
export class FacebookGroupComponent implements OnDestroy {
  connections$: Observable<I_CONNECTION[]>;
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private facade: FacebookGroupFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();

    this.getFacebookGroups();
  }

  private getFacebookGroups(): void {
    this.connections$ = this.facade.fetchFBGroups(this.activatedRoute.queryParams, 'facebook-group');
  }

  addFacebookGroup(pageInfo: I_CONNECTION): void {
    this.subscriptions$.add(this.facade.addFacebookGroup(pageInfo).subscribe(() => this.facade.navigateToGroup('connection/profiles')));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
