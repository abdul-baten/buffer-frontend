import { EConnectionStatus, EConnectionType } from 'src/app/core/enum';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import type { ResponsiveLayoutService, UserService } from 'src/app/core/service';
import type { FacebookPageService } from '../service/facebook-page.service';
import type { IConnection, IUser } from 'src/app/core/model';
import type { Observable } from 'rxjs';
import type { ParamMap, Router } from '@angular/router';

@Injectable()
export class FacebookPageFacade {
  constructor (
    private readonly facebookPageService: FacebookPageService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public isWeb (): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  public isHandset (): Observable<boolean> {
    return this.responsiveLayoutService.isHandset();
  }

  public isTablet (): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }

  public navigateToPage (route: string): void {
    this.router.navigate([route]);
  }

  public getPages (query_param_map: Observable<ParamMap>, connection_type: string): Observable<IConnection[]> {
    return query_param_map.pipe(switchMap((params: ParamMap) => {
      const code = params.get('code') as string;

      return this.facebookPageService.fetchFacebookPages(code, connection_type).pipe(map((connections: IConnection[]) => connections));
    }));
  }

  public addFacebookPage (connection_info: IConnection): Observable<IConnection> {
    const user_info_from_state$ = this.userService.getUserFromState();

    return user_info_from_state$.pipe(switchMap(({ id: connection_user_id }: IUser) => {
      const connection_status = EConnectionStatus.ENABLED;
      const connection_type = EConnectionType.TWITTER;
      const coonnection = Object.assign(connection_info, {
        connection_status,
        connection_type,
        connection_user_id
      });

      return this.facebookPageService.addFacebookPage(coonnection);
    }));
  }
}
