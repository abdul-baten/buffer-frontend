import { Injectable } from '@angular/core';
import { ConnectionService, ResponsiveLayoutService } from 'src/app/core/service';
import { IConnection } from 'src/app/core/model';
import { Observable } from 'rxjs';

@Injectable()
export class ToolbarFacade {
  constructor (private readonly connectionService: ConnectionService, private readonly responsiveLayoutService: ResponsiveLayoutService) {}

  isWeb (): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  getConnections (): Observable<IConnection[]> {
    return this.connectionService.entities$;
  }
}
