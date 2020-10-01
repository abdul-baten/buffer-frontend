import { ConnectionService, ResponsiveLayoutService, UserService } from 'src/app/core/service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from 'src/app/core/enum';
import { I_CONNECTION, I_USER } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { LinkedInPageService } from '../service/linkedin-page.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Injectable()
export class LinkedInPageFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly linkedInPageService: LinkedInPageService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  navigateToRoute(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  isHandset(): Observable<boolean> {
    return this.responsiveLayoutService.isHandset();
  }

  isTablet(): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }

  getLinkedInPage(connectionType: string, code: string): Observable<I_CONNECTION[]> {
    return this.linkedInPageService.getLinkedInPage(connectionType, code);
  }

  addLinkedInPage(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    const userFromState$ = this.userService.getUserFromState();
    return userFromState$.pipe(
      switchMap((user: I_USER) => {
        connectionInfo.connectionUserID = user.id;
        connectionInfo.connectionStatus = E_CONNECTION_STATUS.ENABLED;
        connectionInfo.connectionType = E_CONNECTION_TYPE.LINKEDIN_PAGE;
        return this.linkedInPageService.addLinkedInPage(connectionInfo).pipe(
          tap((connection: I_CONNECTION) => {
            this.connectionService.addConnectionToState(connection);
          }),
        );
      }),
    );
  }
}
