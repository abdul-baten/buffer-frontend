import { ConnectionService } from '@core/service/connection/connection.service';
import { I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';

@Injectable()
export class SocialProfileToolbarFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
  ) {}

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  getConnections(): Observable<I_CONNECTION[]> {
    return this.connectionService.entities$;
  }
}
