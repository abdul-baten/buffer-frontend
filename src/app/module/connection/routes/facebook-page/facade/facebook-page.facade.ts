import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from '@core/enum';
import { FacebookPageService } from '../service/facebook-page.service';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { I_CONNECTION, I_FB_PAGE_RESPONSE } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { selectUserId } from 'src/app/selectors/user.selector';
import { setUserInfo } from 'src/app/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class FacebookPageFacade {
  private loading: Observable<boolean> = of(true);
  private facebookPages: Observable<I_CONNECTION[]>;

  constructor(
    private documentTitleService: DocumentTitleService,
    private facebookPageService: FacebookPageService,
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

  setDocumentTitle(activatedRoute: ActivatedRoute): Subscription {
    return this.documentTitleService.setDocumentTitleFromRouteData(activatedRoute);
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

  navigateToPage(pageToNavigate: string, routeData?: any): void {
    this.router.navigate([pageToNavigate], { state: { pageData: routeData } });
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
    return this.store.select(selectUserId).pipe(
      tap(() => this.setLoadingStatus(true)),
      switchMap((connectionUserID: string) => {
        connectionInfo.connectionUserID = connectionUserID;
        connectionInfo.connectionStatus = E_CONNECTION_STATUS.ENABLED;
        connectionInfo.connectionType = E_CONNECTION_TYPE.FACEBOOK_PAGE;
        return this.facebookPageService.addFacebookPage(connectionInfo);
      }),
    );
  }
}
