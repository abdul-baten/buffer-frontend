import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import type { ActivatedRoute } from '@angular/router';
import type { IConnection } from 'src/app/core/model';
import type { TwitterFacade } from '../facade/twitter.facade';

@Component({
  selector: 'buffer-twitter',
  styleUrls: ['./twitter.component.css'],
  templateUrl: './twitter.component.html'
})
export class TwitterComponent implements OnDestroy {
  public connection$: Observable<IConnection>;
  public is_platform_handset$: Observable<boolean>;
  public is_platform_tablet$: Observable<boolean>;
  public is_platform_web$: Observable<boolean>;
  private subscription$ = new Subscription();

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: TwitterFacade) {
    this.is_platform_handset$ = this.facade.isHandset();
    this.is_platform_tablet$ = this.facade.isTablet();
    this.is_platform_web$ = this.facade.isWeb();
    this.connection$ = this.facade.fetchTwitterProfile(this.activatedRoute.queryParamMap);
  }

  public addTwitterProfile (connection: IConnection): void {
    this.subscription$.add(this.facade.addTwitterProfile(connection).subscribe(() => this.facade.navigateToPage('connection/profiles')));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    this.subscription$.unsubscribe();
  }
}
