import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { I_CONNECTION } from '@core/model';
import { LinkedInPageFacade } from '../facade/linkedin-page.facade';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'buffer--linkedin-page',
  templateUrl: './linkedin-page.component.html',
  styleUrls: ['./linkedin-page.component.scss'],
})
export class LinkedInPageComponent implements OnInit {
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  connection$: Observable<I_CONNECTION[]>;

  constructor(private readonly activatedRoute: ActivatedRoute, public facade: LinkedInPageFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
  }

  ngOnInit(): void {
    this.connection$ = this.activatedRoute.queryParamMap.pipe(
      switchMap((queryParamMap: ParamMap) => {
        const code = queryParamMap.get('code');
        const state = queryParamMap.get('state');

        if (!code && !state) {
          this.navigateToRoute('/connection/choose');
        }

        return this.facade.getLinkedInPage('linkedin-page', code);
      }),
    );
  }

  navigateToRoute(routeToNavigate: string): void {
    this.facade.navigateToRoute(routeToNavigate);
  }

  addConnection(connectionInfo: I_CONNECTION) {
    this.facade.addLinkedInPage(connectionInfo).subscribe(() => this.navigateToRoute('connection/profiles'));
  }
}
