import { AppState } from 'src/app/reducers';
import { ConnectionService, ResponsiveLayoutService, UserService } from 'src/app/core/service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from 'src/app/core/enum';
import { I_CONNECTION, I_FB_PAGE_RESPONSE, I_USER } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { InstagramBusinessService } from '../service/instagram-business.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParamMap, Router } from '@angular/router';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class InstagramBusinessFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly facebookPageService: InstagramBusinessService,
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

  fetchFBPages(queryParams: Observable<ParamMap>, connectionType: string): Observable<I_CONNECTION[]> {
    return queryParams.pipe(
      switchMap((params: ParamMap) => {
        const code = params.get('code') as string;
        return this.facebookPageService.fetchInstagramBusiness(code, connectionType).pipe(
          map((resp: I_FB_PAGE_RESPONSE) => {
            this.store.dispatch(setUserInfo({ user: resp.user }));
            return resp.pages;
          }),
        );
      }),
    );
  }

  addInstagramBusiness(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    const userFromState$ = this.userService.getUserFromState();
    return userFromState$.pipe(
      switchMap((user: I_USER) => {
        connectionInfo.connectionUserID = user.id;
        connectionInfo.connectionStatus = E_CONNECTION_STATUS.ENABLED;
        connectionInfo.connectionType = E_CONNECTION_TYPE.INSTAGRAM_BUSINESS;
        return this.facebookPageService.addInstagramBusiness(connectionInfo).pipe(
          tap((connection: I_CONNECTION) => {
            this.connectionService.addConnectionToState(connection);
          }),
        );
      }),
    );
  }
}
