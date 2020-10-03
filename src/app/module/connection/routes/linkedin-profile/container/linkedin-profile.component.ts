import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { I_CONNECTION } from 'src/app/core/model';
import { LinkedInProfileFacade } from '../facade/linkedin-profile.facade';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'buffer--connection-linkedin-profile',
  templateUrl: './linkedin-profile.component.html',
  styleUrls: ['./linkedin-profile.component.css'],
})
export class LinkedInProfileComponent {
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  connection$: Observable<I_CONNECTION>;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly facade: LinkedInProfileFacade) {
    this.isHandset$ = this.facade.isHandset();
    this.isTablet$ = this.facade.isTablet();
    this.isWeb$ = this.facade.isWeb();
    this.connection$ = this.getConnections();
  }

  private getConnections(): Observable<I_CONNECTION> {
    return this.activatedRoute.queryParamMap.pipe(
      switchMap((queryParamMap: ParamMap) => {
        const code = queryParamMap.get('code') as string;
        const state = queryParamMap.get('state') as string;

        if (!code && !state) {
          this.navigateToRoute('/connection/choose');
        }

        return this.facade.getLinkedInProfile('linkedin-profile', code);
      }),
    );
  }

  navigateToRoute(routeToNavigate: string): void {
    this.facade.navigateToRoute(routeToNavigate);
  }

  addConnection(connectionInfo: I_CONNECTION) {
    this.facade.addLinkedInProfile(connectionInfo).subscribe(() => this.navigateToRoute('connection/profiles'));
  }
}
