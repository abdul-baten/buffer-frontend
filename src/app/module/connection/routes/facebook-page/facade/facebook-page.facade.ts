import { AppState } from 'src/app/reducers';
import { ConnectionService } from '@core/service/connection/connection.service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from '@core/enum';
import { FacebookPageService } from '../service/facebook-page.service';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { I_CONNECTION, I_FB_PAGE_RESPONSE, I_USER } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Params, Router } from '@angular/router';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { UserService } from '@core/service/user/user.service';

@Injectable()
export class FacebookPageFacade {
  private loading: Observable<boolean> = of(true);
  private facebookPages: Observable<I_CONNECTION[]>;

  constructor(
    private facebookPageService: FacebookPageService,
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

  setLoadingStatus(loadingStatus: boolean = true): void {
    this.loading = of(loadingStatus);
  }

  getLoadingStatus(): Observable<boolean> {
    return this.loading;
  }

  setFacebookPages(facebookPages: any): void {
    this.facebookPages = of(facebookPages);
  }

  getFacebookPages(): Observable<I_CONNECTION[]> {
    return this.facebookPages;
  }

  navigateToPage(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }

  fetchFBPages(queryParams: Observable<Params>): void {
    queryParams.subscribe((params: { code: string }) => {
      const { code } = params;
      this.facebookPageService
        .fetchFacebookPages(code)
        .pipe(finalize(() => this.setLoadingStatus(false)))
        .subscribe((resp: I_FB_PAGE_RESPONSE) => {
          this.store.dispatch(setUserInfo({ user: resp.user }));
          this.setFacebookPages(resp.pages);
        });
    });
  }

  addFacebookPage(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    const userFromState$ = this.userService.getUserFromState();
    return userFromState$.pipe(
      tap(() => this.setLoadingStatus(true)),
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
