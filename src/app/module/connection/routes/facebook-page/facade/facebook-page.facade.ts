import { AppState } from 'src/app/reducers';
import { ConnectionService, ResponsiveLayoutService, UserService } from 'src/app/core/service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from 'src/app/core/enum';
import { FacebookPageService } from '../service/facebook-page.service';
import { I_CONNECTION, I_FB_PAGE_RESPONSE, I_USER } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Params, Router } from '@angular/router';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class FacebookPageFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly facebookPageService: FacebookPageService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
    private readonly userService: UserService,
    private store: Store<AppState>,
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

  fetchFBPages(queryParams: Observable<Params>, connectionType: string): Observable<I_CONNECTION[]> {
    return queryParams.pipe(
      switchMap((params: { code: string }) => {
        const { code } = params;
        return this.facebookPageService.fetchFacebookPages(code, connectionType).pipe(
          map((resp: I_FB_PAGE_RESPONSE) => {
            this.store.dispatch(setUserInfo({ user: resp.user }));
            return resp.pages;
          }),
        );
      }),
    );
  }

  addFacebookPage(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    const userFromState$ = this.userService.getUserFromState();
    return userFromState$.pipe(
      switchMap((user: I_USER) => {
        connectionInfo.connectionUserID = user.id;
        connectionInfo.connectionStatus = E_CONNECTION_STATUS.ENABLED;
        connectionInfo.connectionType = E_CONNECTION_TYPE.FACEBOOK_PAGE;
        return this.facebookPageService.addFacebookPage(connectionInfo).pipe(
          tap((connection: I_CONNECTION) => {
            this.connectionService.addConnectionToState(connection);
          }),
        );
      }),
    );
  }
}
