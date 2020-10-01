import { ConnectionService, ResponsiveLayoutService, UserService } from 'src/app/core/service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from 'src/app/core/enum';
import { I_CONNECTION, I_USER } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Params, Router } from '@angular/router';
import { TwitterService } from '../service/twitter.service';

@Injectable()
export class TwitterFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
    private readonly twitterService: TwitterService,
    private readonly userService: UserService,
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

  fetchTwitterProfile(queryParams: Observable<Params>): Observable<I_CONNECTION> {
    return queryParams.pipe(
      mergeMap((params: { oauth_token: string; oauth_verifier: string }) => {
        const { oauth_token, oauth_verifier } = params;
        return this.twitterService.fetchTwitterProfiles(oauth_token, oauth_verifier).pipe(
          map((resp: any) => {
            return resp;
          }),
        );
      }),
    );
  }

  addTwitterProfile(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    const userFromState$ = this.userService.getUserFromState();
    return userFromState$.pipe(
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
