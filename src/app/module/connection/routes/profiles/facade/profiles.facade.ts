import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConnectionService } from 'src/app/core/service';
import { IConnection } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProfilesFacade {
  constructor (
    private readonly confirmationService: ConfirmationService,
    private readonly connectionService: ConnectionService,
    private readonly router: Router
  ) {}

  public getConnectionsFromState (): Observable<IConnection[]> {
    return this.connectionService.entities$;
  }

  public getTotalConnections (): Observable<number> {
    return this.connectionService.count$;
  }

  public deleteConnection (connection: IConnection): void {
    this.confirmationService.confirm({
      accept: () => {
        this.connectionService.
          deleteConnection(connection).
          pipe(finalize(() => this.confirmationService.close())).
          subscribe();
      },
      key: 'connectionDelete',
      message: 'Are you sure you want to delete this connection?'
    });
  }

  public navigate (route: string[]): void {
    this.router.navigate(route);
  }
}
