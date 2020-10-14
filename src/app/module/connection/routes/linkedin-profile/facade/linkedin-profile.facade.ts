import { EConnectionStatus, EConnectionType } from 'src/app/core/enum';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ResponsiveLayoutService, UserService } from 'src/app/core/service';
import { IConnection, IUser } from 'src/app/core/model';
import { LinkedInProfileService } from '../service/linkedin-profile.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LinkedInProfileFacade {
  constructor (
    private readonly linkedInProfileService: LinkedInProfileService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public navigateToRoute (route: string): void {
    this.router.navigate([route]);
  }

  public isWeb (): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  public isHandset (): Observable<boolean> {
    return this.responsiveLayoutService.isHandset();
  }

  public isTablet (): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }

  public getLinkedInProfile (connection_type: string, code: string): Observable<IConnection> {
    return this.linkedInProfileService.getLinkedInProfile(connection_type, code);
  }

  public addLinkedInProfile (connection_info: IConnection): Observable<IConnection> {
    const user_from_state$ = this.userService.getUserFromState();

    return user_from_state$.pipe(switchMap(({ id: connection_user_id }: IUser) => {
      const connection_status = EConnectionStatus.ENABLED;
      const connection_type = EConnectionType.LINKEDIN_PROFILE;
      const coonnection_object = Object.assign(connection_info, {
        connection_status,
        connection_type,
        connection_user_id
      });

      return this.linkedInProfileService.addLinkedInProfile(coonnection_object);
    }));
  }
}
