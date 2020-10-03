import { ConfirmationService } from 'primeng/api';
import { ConnectionService, ResponsiveLayoutService } from 'src/app/core/service';
import { finalize } from 'rxjs/operators';
import { I_CONNECTION } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProfilesFacade {
  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly connectionService: ConnectionService,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
  ) {}

  getConnectionsFromState(): Observable<I_CONNECTION[]> {
    return this.connectionService.entities$;
  }

  getTotalConnections(): Observable<number> {
    return this.connectionService.count$;
  }

  deleteConnection(connection: I_CONNECTION): void {
    this.confirmationService.confirm({
      key: 'connectionDelete',
      message: 'Are you sure you want to delete this connection?',
      accept: () => {
        this.connectionService
          .deleteConnection(connection)
          .pipe(finalize(() => this.confirmationService.close()))
          .subscribe();
      },
    });
  }

  navigate(pageToNavigate: string[]): void {
    this.router.navigate(pageToNavigate);
  }

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  isTablet(): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }
}
