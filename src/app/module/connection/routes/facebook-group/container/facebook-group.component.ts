import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { FacebookGroupFacade } from '../facade/facebook-group.facade';
import { I_CONNECTION } from 'src/app/core/model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'buffer--facebook-group',
  styleUrls: ['./facebook-group.component.css'],
  templateUrl: './facebook-group.component.html',
})
export class FacebookGroupComponent implements OnDestroy {
  connections$: Observable<I_CONNECTION[]>;
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;
  private subscription$ = new Subscription();

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookGroupFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();

    this.connections$ = this.facade.fetchFBGroups(this.activatedRoute.queryParamMap, 'facebook-group');
  }

  addFacebookGroup(pageInfo: I_CONNECTION): void {
    this.subscription$.add(this.facade.addFacebookGroup(pageInfo).subscribe(() => this.facade.navigateToGroup('connection/profiles')));
  }

  trackBy(_index: number, connection: I_CONNECTION): number {
    return +connection.connectionID;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
