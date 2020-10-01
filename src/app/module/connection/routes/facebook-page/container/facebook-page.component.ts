import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { FacebookPageFacade } from '../facade/facebook-page.facade';
import { I_CONNECTION } from 'src/app/core/model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'buffer--app-facebook-page',
  templateUrl: './facebook-page.component.html',
  styleUrls: ['./facebook-page.component.css'],
})
export class FacebookPageComponent implements OnDestroy {
  connections$: Observable<I_CONNECTION[]>;
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;
  private subscription$ = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private facade: FacebookPageFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();

    this.getFacebookPages();
  }

  private getFacebookPages(): void {
    this.connections$ = this.facade.fetchFBPages(this.activatedRoute.queryParams, 'facebook-page');
  }

  addFacebookPage(pageInfo: I_CONNECTION): void {
    this.subscription$.add(this.facade.addFacebookPage(pageInfo).subscribe(() => this.facade.navigateToPage('connection/profiles')));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
