import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { I_CONNECTION } from '@core/model';
import { LinkedInProfileFacade } from '../facade/linkedin-profile.facade';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'buffer--connection-linkedin-profile',
  templateUrl: './linkedin-profile.component.html',
  styleUrls: ['./linkedin-profile.component.scss'],
})
export class LinkedInProfileComponent implements OnInit {
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isWeb$: Observable<boolean>;

  connection$: Observable<I_CONNECTION>;

  constructor(private readonly activatedRoute: ActivatedRoute, public linkedinProfileFacade: LinkedInProfileFacade) {
    this.isHandset$ = this.linkedinProfileFacade.isHandset();
    this.isTablet$ = this.linkedinProfileFacade.isTablet();
    this.isWeb$ = this.linkedinProfileFacade.isWeb();
  }

  ngOnInit(): void {
    this.connection$ = this.activatedRoute.queryParamMap.pipe(
      switchMap((queryParamMap: ParamMap) => {
        const code = queryParamMap.get('code');
        const state = queryParamMap.get('state');

        if (!code && !state) {
          this.navigateToRoute('/connection/choose');
        }

        return this.linkedinProfileFacade.getLinkedInProfile('linkedin-profile', code);
      }),
    );
  }

  navigateToRoute(routeToNavigate: string): void {
    this.linkedinProfileFacade.navigateToRoute(routeToNavigate);
  }

  addConnection(connectionInfo: I_CONNECTION) {
    this.linkedinProfileFacade.addLinkedInProfile(connectionInfo).subscribe(() => this.navigateToRoute('connection/profiles'));
  }
}
