import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IConnection } from 'src/app/core/model';
import { LinkedInProfileFacade } from '../facade/linkedin-profile.facade';

@Component({
  selector: 'buffer-linkedin-profile',
  styleUrls: ['./linkedin-profile.component.css'],
  templateUrl: './linkedin-profile.component.html'
})
export class LinkedInProfileComponent implements OnDestroy {
  public connection$: Observable<IConnection>;
  public is_platform_handset$: Observable<boolean>;
  public is_platform_tablet$: Observable<boolean>;
  public is_platform_web$: Observable<boolean>;
  private subscription$ = new Subscription();

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: LinkedInProfileFacade) {
    this.is_platform_handset$ = this.facade.isHandset();
    this.is_platform_tablet$ = this.facade.isTablet();
    this.is_platform_web$ = this.facade.isWeb();
    this.connection$ = this.getConnections();
  }

  private getConnections (): Observable<IConnection> {
    return this.activatedRoute.queryParamMap.pipe(switchMap((query_params: ParamMap) => {
      const code = query_params.get('code') as string;
      const state = query_params.get('state') as string;

      if (!code && !state) {
        this.navigateToRoute('/connection/choose');
      }

      return this.facade.getLinkedInProfile('linkedin-profile', code);
    }));
  }

  public navigateToRoute (route: string): void {
    this.facade.navigateToRoute(route);
  }

  public addConnection (connection_info: IConnection): void {
    this.subscription$.add(this.facade.addLinkedInProfile(connection_info).subscribe(() => this.navigateToRoute('connection/profiles')));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
