import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { I_CONNECTION } from 'src/app/core/model';
import { InstagramBusinessFacade } from '../facade/instagram-business.facade';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'buffer--instagram-business',
  templateUrl: './instagram-business.component.html',
  styleUrls: ['./instagram-business.component.css'],
})
export class InstagramBusinessComponent implements OnDestroy {
  connections$: Observable<I_CONNECTION[]>;
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;
  private subscription$ = new Subscription();

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly facade: InstagramBusinessFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();

    this.connections$ = this.facade.fetchFBPages(this.activatedRoute.queryParamMap, 'instagram-business');
  }

  addInstagramBusiness(pageInfo: I_CONNECTION): void {
    this.subscription$.add(this.facade.addInstagramBusiness(pageInfo).subscribe(() => this.facade.navigateToPage('connection/profiles')));
  }

  trackBy(_index: number, connection: I_CONNECTION): number {
    return +connection.connectionID;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
