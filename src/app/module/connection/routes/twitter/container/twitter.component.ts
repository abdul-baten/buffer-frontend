import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { I_CONNECTION } from 'src/app/core/model';
import { Observable, Subscription } from 'rxjs';
import { TwitterFacade } from '../facade/twitter.facade';

@Component({
  selector: 'buffer--twitter',
  styleUrls: ['./twitter.component.css'],
  templateUrl: './twitter.component.html',
})
export class TwitterComponent implements OnDestroy {
  connection$: Observable<I_CONNECTION>;
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;
  private subscription$ = new Subscription();

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly facade: TwitterFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
    this.connection$ = this.facade.fetchTwitterProfile(this.activatedRoute.queryParamMap);
  }

  addTwitterProfile(connection: I_CONNECTION): void {
    this.subscription$.add(this.facade.addTwitterProfile(connection).subscribe(() => this.facade.navigateToPage('connection/profiles')));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
