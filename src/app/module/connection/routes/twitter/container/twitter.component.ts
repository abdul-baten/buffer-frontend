import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { I_CONNECTION } from '@core/model';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { TwitterFacade } from '../facade/twitter.facade';

@Component({
  selector: 'buffer--twitter',
  styleUrls: ['./twitter.component.scss'],
  templateUrl: './twitter.component.html',
})
export class TwitterComponent implements OnDestroy {
  connection$: Observable<I_CONNECTION>;
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private facade: TwitterFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();

    this.getTwitterProfile();
  }

  private getTwitterProfile(): void {
    this.connection$ = this.facade.fetchTwitterProfile(this.activatedRoute.queryParams);
  }

  addTwitterProfile(connection: I_CONNECTION): void {
    this.subscriptions$.add(this.facade.addTwitterProfile(connection).subscribe(() => this.facade.navigateToPage('connection/profiles')));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
