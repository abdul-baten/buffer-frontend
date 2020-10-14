import { EConnectionStatus, EConnectionType } from 'src/app/core/enum';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { ResponsiveLayoutService, UserService } from 'src/app/core/service';
import { IConnection, IUser } from 'src/app/core/model';
import { InstagramBusinessService } from '../service/instagram-business.service';
import { Observable } from 'rxjs';
import { ParamMap, Router } from '@angular/router';

@Injectable()
export class InstagramBusinessFacade {
  constructor (
    private readonly instagramBusinessService: InstagramBusinessService,
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

  public getAccounts (query_param_map: Observable<ParamMap>, connection_type: string): Observable<IConnection[]> {
    return query_param_map.pipe(switchMap((params: ParamMap) => {
      const code = params.get('code') as string;

      return this.instagramBusinessService.getBusinessAccounts(code, connection_type).pipe(map((coonnections: IConnection[]) => coonnections));
    }));
  }

  public addInstagramBusiness (connection_info: IConnection): Observable<IConnection> {
    const user_from_state$ = this.userService.getUserFromState();

    return user_from_state$.pipe(switchMap(({ id: connection_user_id }: IUser) => {
      const connection_status = EConnectionStatus.ENABLED;
      const connection_type = EConnectionType.INSTAGRAM_BUSINESS;
      const connection = Object.assign(connection_info, {
        connection_status,
        connection_type,
        connection_user_id
      });

      return this.instagramBusinessService.addBusinessAccount(connection).pipe(map((connection: IConnection) => connection));
    }));
  }
}

