import { AppState } from 'src/app/reducers';
import { ConnectionService } from '@core/service/connection/connection.service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from '@core/enum';
import { FacebookGroupService } from '../service/facebook-group.service';
import { I_CONNECTION, I_FB_PAGE_RESPONSE, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Params, Router } from '@angular/router';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { UserService } from '@core/service/user/user.service';

@Injectable()
export class FacebookGroupFacade {
  constructor(
    private facebookGroupService: FacebookGroupService,
    private readonly connectionService: ConnectionService,
    private readonly userService: UserService,
    private responsiveLayoutService: ResponsiveLayoutService,
    private router: Router,
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

  navigateToGroup(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }

  fetchFBGroups(queryParams: Observable<Params>, connectionType: string): Observable<I_CONNECTION[]> {
    return queryParams.pipe(
      mergeMap((params: { code: string }) => {
        const { code } = params;
        return this.facebookGroupService.fetchFacebookGroups(code, connectionType).pipe(
          map((resp: I_FB_PAGE_RESPONSE) => {
            this.store.dispatch(setUserInfo({ user: resp.user }));
            return resp.pages;
          }),
        );
      }),
    );
  }

  addFacebookGroup(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    const userFromState$ = this.userService.getUserFromState();
    return userFromState$.pipe(
      switchMap((user: I_USER) => {
        connectionInfo.connectionUserID = user.id;
        connectionInfo.connectionStatus = E_CONNECTION_STATUS.ENABLED;
        connectionInfo.connectionType = E_CONNECTION_TYPE.FACEBOOK_GROUP;
        return this.facebookGroupService.addFacebookGroup(connectionInfo).pipe(
          tap((connection: I_CONNECTION) => {
            this.connectionService.addConnectionToState(connection);
          }),
        );
      }),
    );
  }
}
