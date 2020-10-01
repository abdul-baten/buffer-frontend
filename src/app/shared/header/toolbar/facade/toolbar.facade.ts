import { ConnectionService, ResponsiveLayoutService } from 'src/app/core/service';
import { I_CONNECTION } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ToolbarFacade {
  constructor(private readonly connectionService: ConnectionService, private readonly responsiveLayoutService: ResponsiveLayoutService) {}

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  getConnections(): Observable<I_CONNECTION[]> {
    return this.connectionService.entities$;
  }
}
