import { ConnectionService, UserService } from 'src/app/core/service';
import { EConnectionStatus, EConnectionType } from 'src/app/core/enum';
import { IConnection, IUser } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParamMap, Router } from '@angular/router';

@Injectable()
export class FacebookGroupFacade {
  constructor (
    private readonly connectionService: ConnectionService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public navigate (route: string): void {
    this.router.navigate([route]);
  }

  public getGroups (query_param_map: Observable<ParamMap>, connection_type: string): Observable<IConnection[]> {
    return query_param_map.pipe(switchMap((params: ParamMap) => {
      const code = params.get('code') as string;

      return this.connectionService.getFacebookConnections(code, connection_type).pipe(map((connections: IConnection[]) => connections));
    }));
  }

  public addGroup (connection_info: IConnection): Observable<IConnection> {
    const user_info_from_state$ = this.userService.getUserFromState();

    return user_info_from_state$.pipe(switchMap(({ id: connection_user_id }: IUser) => {
      const connection_status = EConnectionStatus.ENABLED;
      const connection_type = EConnectionType.LINKEDIN_PROFILE;
      const connection = Object.assign(connection_info, {
        connection_status,
        connection_type,
        connection_user_id
      });

      return this.connectionService.addConnection(connection);
    }));
  }
}
