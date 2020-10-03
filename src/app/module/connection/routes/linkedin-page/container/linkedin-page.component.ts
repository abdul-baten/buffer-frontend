import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { I_CONNECTION } from 'src/app/core/model';
import { LinkedInPageFacade } from '../facade/linkedin-page.facade';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'buffer--linkedin-page',
  styleUrls: ['./linkedin-page.component.css'],
  templateUrl: './linkedin-page.component.html',
})
export class LinkedInPageComponent {
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  connection$: Observable<I_CONNECTION[]>;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly facade: LinkedInPageFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
    this.connection$ = this.getConnections();
  }

  private getConnections(): Observable<I_CONNECTION[]> {
    return this.activatedRoute.queryParamMap.pipe(
      switchMap((queryParamMap: ParamMap) => {
        const code = queryParamMap.get('code') as string,
          state = queryParamMap.get('state') as string;

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

  trackBy(_index: number, connection: I_CONNECTION): number {
    return +connection.connectionID;
  }
}
