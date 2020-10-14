import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FacebookPageFacade } from '../facade/facebook-page.facade';
import { IConnection } from 'src/app/core/model';

@Component({
  selector: 'buffer-app-facebook-page',
  styleUrls: ['./facebook-page.component.css'],
  templateUrl: './facebook-page.component.html'
})
export class FacebookPageComponent implements OnDestroy {
  private subscription$ = new Subscription();
  public connections$: Observable<IConnection[]>;
  public is_platform_handset$: Observable<boolean>;
  public is_platform_tablet$: Observable<boolean>;
  public is_platform_web$: Observable<boolean>;

  constructor (private activatedRoute: ActivatedRoute, private facade: FacebookPageFacade) {
    this.connections$ = this.facade.getPages(this.activatedRoute.queryParamMap, 'facebook-page');
    this.is_platform_handset$ = this.facade.isHandset();
    this.is_platform_tablet$ = this.facade.isTablet();
    this.is_platform_web$ = this.facade.isWeb();
  }

  public addFacebookPage (page_info: IConnection): void {
    this.subscription$.add(this.facade.addFacebookPage(page_info).subscribe(() => this.facade.navigateToPage('connection/profiles')));
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  trackBy (_index: number, connection: IConnection): number {
    return Number(connection.connection_id);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
