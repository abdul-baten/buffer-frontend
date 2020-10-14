import { EConnectionStatus, EConnectionType } from 'src/app/core/enum';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ResponsiveLayoutService, UserService } from 'src/app/core/service';
import { IConnection, IUser } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { ParamMap, Router } from '@angular/router';
import { TwitterService } from '../service/twitter.service';

@Injectable()
export class TwitterFacade {
  constructor (
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
    private readonly twitterService: TwitterService,
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

  fetchTwitterProfile (query_params: Observable<ParamMap>): Observable<IConnection> {
    return query_params.pipe(switchMap((params: ParamMap) => {
      const oauth_token = params.get('oauth_token') as string;
      const oauth_verifier = params.get('oauth_verifier') as string;

      return this.twitterService.getTwitterProfile(oauth_token, oauth_verifier).pipe(map((response: IConnection) => response));
    }));
  }

  addTwitterProfile (connection_info: IConnection): Observable<IConnection> {
    const user_info_from_state$ = this.userService.getUserFromState();

    return user_info_from_state$.pipe(switchMap(({ id: connection_user_id }: IUser) => {
      const connection_status = EConnectionStatus.ENABLED;
      const connection_type = EConnectionType.TWITTER;
      const coonnection = Object.assign(connection_info, {
        connection_status,
        connection_type,
        connection_user_id
      });

      return this.twitterService.addTwitterProfile(coonnection);
    }));
  }
}
