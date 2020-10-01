import { ConnectionService, ResponsiveLayoutService, UserService } from 'src/app/core/service';
import { E_CONNECTION_STATUS, E_CONNECTION_TYPE } from 'src/app/core/enum';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { I_CONNECTION, I_USER } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { LinkedInProfileService } from '../service/linkedin-profile.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LinkedInProfileFacade {
  private loading: Observable<boolean> = of(true);

  constructor(
    private readonly connectionService: ConnectionService,
    private readonly linkedInProfileService: LinkedInProfileService,
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

  setLoadingStatus(loadingStatus: boolean = true): void {
    this.loading = of(loadingStatus);
  }

  getLoadingStatus(): Observable<boolean> {
    return this.loading;
  }

  getLinkedInProfile(connectionType: string, code: string): Observable<I_CONNECTION> {
    return this.linkedInProfileService.getLinkedInProfile(connectionType, code).pipe(finalize(() => this.setLoadingStatus(false)));
  }

  addLinkedInProfile(connectionInfo: I_CONNECTION): Observable<I_CONNECTION> {
    const userFromState$ = this.userService.getUserFromState();
    return userFromState$.pipe(
      tap(() => this.setLoadingStatus(true)),
      switchMap((user: I_USER) => {
        connectionInfo.connectionUserID = user.id;
        connectionInfo.connectionStatus = E_CONNECTION_STATUS.ENABLED;
        connectionInfo.connectionType = E_CONNECTION_TYPE.LINKEDIN_PROFILE;
        return this.linkedInProfileService.addLinkedInProfile(connectionInfo).pipe(
          tap((connection: I_CONNECTION) => {
            this.connectionService.addConnectionToState(connection);
          }),
        );
      }),
    );
  }
}
