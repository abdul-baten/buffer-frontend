import { ConnectionDeleteModalComponent } from '@shared/module/modal/connection-delete-modal/container/connection-delete-modal.component';
import { ConnectionService } from '@core/service/connection/connection.service';
import { I_CONNECTION } from '@core/model';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { Router } from '@angular/router';

@Injectable()
export class ProfilesFacade {
  loading$: Observable<boolean>;
  connections$: Observable<I_CONNECTION[]>;

  constructor(
    private readonly connectionService: ConnectionService,
    private readonly matDialog: MatDialog,
    private readonly responsiveLayoutService: ResponsiveLayoutService,
    private readonly router: Router,
  ) {
    this.loading$ = this.connectionService.loading$;
    this.connections$ = this.connectionService.entities$;
  }

  getLoadingState(): Observable<boolean> {
    return this.loading$;
  }

  getConnectionsFromState(): Observable<I_CONNECTION[]> {
    return this.connections$;
  }

  getTotalConnections(): Observable<number> {
    return this.connectionService.count$;
  }

  deleteConnection(connection: I_CONNECTION): void {
    this.matDialog.open(ConnectionDeleteModalComponent, {
      data: connection,
      autoFocus: false,
      width: '500px',
    });
  }

  navigateToPage(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }

  isWeb(): Observable<boolean> {
    return this.responsiveLayoutService.isWeb();
  }

  isTablet(): Observable<boolean> {
    return this.responsiveLayoutService.isTablet();
  }
}
