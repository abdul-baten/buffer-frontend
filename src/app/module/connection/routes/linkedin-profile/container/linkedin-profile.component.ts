import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LinkedInProfileFacade } from '../facade/linkedin-profile.facade';
import { Observable } from 'rxjs';
import { I_CONNECTION } from '@core/model';

@Component({
  selector: 'buffer--connection-linkedin-profile',
  templateUrl: './linkedin-profile.component.html',
  styleUrls: ['./linkedin-profile.component.scss'],
})
export class LinkedInProfileComponent implements OnInit {
  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  connection: Observable<I_CONNECTION>;

  constructor(private readonly activatedRoute: ActivatedRoute, public linkedinProfileFacade: LinkedInProfileFacade) {
    this.isHandset$ = this.linkedinProfileFacade.isHandset();
    this.isTablet$ = this.linkedinProfileFacade.isTablet();
    this.isWeb$ = this.linkedinProfileFacade.isWeb();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap: ParamMap) => {
        const code = queryParamMap.get('code');
        const state = queryParamMap.get('state');

        if (!code && !state) {
          this.navigateToRoute('/connection/choose');
        }

        this.connection = this.linkedinProfileFacade.getLinkedInProfile('linkedin-profile', code);
      },
      () => this.navigateToRoute('/connection/choose'),
    );
  }

  navigateToRoute(routeToNavigate: string): void {
    this.linkedinProfileFacade.navigateToRoute(routeToNavigate);
  }

  addConnection(connectionInfo: I_CONNECTION) {
    this.linkedinProfileFacade.addLinkedInProfile(connectionInfo).subscribe(() => this.navigateToRoute('connection/profiles'));
  }
}
