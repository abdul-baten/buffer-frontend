import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import type { ActivatedRoute } from '@angular/router';
import type { IConnection } from 'src/app/core/model';
import type { InstagramBusinessFacade } from '../facade/instagram-business.facade';

@Component({
  selector: 'buffer-instagram-business',
  styleUrls: ['./instagram-business.component.css'],
  templateUrl: './instagram-business.component.html'
})
export class InstagramBusinessComponent implements OnDestroy {
  private subscription$ = new Subscription();
  public connections$: Observable<IConnection[]>;
  public is_platform_handset$: Observable<boolean>;
  public is_platform_tablet$: Observable<boolean>;
  public is_platform_web$: Observable<boolean>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: InstagramBusinessFacade) {
    this.connections$ = this.facade.getAccounts(this.activatedRoute.queryParamMap, 'instagram-business');
    this.is_platform_handset$ = this.facade.isHandset();
    this.is_platform_tablet$ = this.facade.isTablet();
    this.is_platform_web$ = this.facade.isWeb();
  }

  public addInstagramBusiness (connection: IConnection): void {
    this.subscription$.add(this.facade.addInstagramBusiness(connection).subscribe(() => this.facade.navigateToPage('connection/profiles')));
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public trackBy (_index: number, connection: IConnection): number {
    return Number(connection.connection_id);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    this.subscription$.unsubscribe();
  }
}
