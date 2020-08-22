import { ConnectionService } from '@core/service/connection/connection.service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from '@core/enum';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { I_CONNECTION, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Params, Router } from '@angular/router';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { TwitterService } from '../service/twitter.service';
import { UserService } from '@core/service/user/user.service';

@Injectable()
export class TwitterFacade {
  private loading: Observable<boolean> = of(true);
  private twitterProfile: Observable<I_CONNECTION>;

  constructor(
    private readonly connectionService: ConnectionService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
    private readonly userService: UserService,
    private twitterService: TwitterService,
  ) {}

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  isHandset(): Observable<boolean> {
    return this.responsiveLayoutService.isHandset();
  }

  isTablet(): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }

  navigateToPage(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }

  setLoadingStatus(loadingStatus: boolean = true): void {
    this.loading = of(loadingStatus);
  }

  getLoadingStatus(): Observable<boolean> {
    return this.loading;
  }

  getTwitterProfile(): Observable<I_CONNECTION> {
    return this.twitterProfile;
  }

  setTwitterProfile(twitterProfile: any): void {
    this.twitterProfile = of(twitterProfile);
  }

  fetchTwitterProfile(queryParams: Observable<Params>): void {
    queryParams.subscribe((params: { oauth_token: string; oauth_verifier: string }) => {
      const { oauth_token, oauth_verifier } = params;
      this.twitterService
        .fetchTwitterProfiles(oauth_token, oauth_verifier)
        .pipe(finalize(() => this.setLoadingStatus(false)))
        .subscribe(resp => {
          this.setTwitterProfile(resp);
        });
    });
  }

  addTwitterProfile(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    const userFromState$ = this.userService.getUserFromState();
    return userFromState$.pipe(
      tap(() => this.setLoadingStatus(true)),
      switchMap((user: I_USER) => {
        connectionInfo.connectionUserID = user.id;
        connectionInfo.connectionStatus = E_CONNECTION_STATUS.ENABLED;
        connectionInfo.connectionType = E_CONNECTION_TYPE.TWITTER;
        return this.twitterService.addTwitterProfile(connectionInfo).pipe(
          tap((connection: I_CONNECTION) => {
            this.connectionService.addConnectionToState(connection);
          }),
        );
      }),
    );
  }
}
